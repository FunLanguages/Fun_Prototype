const express = require('express');
const bodyParser = require('body-parser');
const { generateText, generateImage, generateAudio, analyzeErrors } = require('./agents');
const { buildLessons } = require('./LessonBuilder');

const app = express();
app.use(bodyParser.json());

// Almacenamiento temporal de datos de usuario y progreso
const userProgress = {};

// Logger básico
const logger = {
  info: (message, meta) => console.log(`[INFO] ${message}`, meta),
  error: (message, meta) => console.error(`[ERROR] ${message}`, meta)
};

// Middleware de validación
const validateUserInput = (req, res, next) => {
  if (!req.body.userId) {
    return res.status(400).json({ error: "userId es requerido" });
  }
  next();
};

// Endpoint para recibir datos del formulario inicial
app.post('/api/init', validateUserInput, async (req, res) => {
  try {
    const { userId, language, level, interests, learningGoals } = req.body;
    
    if (!language || !level) {
      return res.status(400).json({ error: "Campos requeridos: language, level" });
    }

    // Almacenar datos del usuario
    userProgress[userId] = {
      language,
      level,
      interests: interests || ['general'],
      learningGoals: learningGoals || [],
      errors: [],
      completedLessons: []
    };
    
    logger.info(`Nuevo usuario registrado`, { userId, language, level });

    // Generar el primer bloque de 3 lecciones
    const firstBlock = await generateLessonBlock(userId);
    
    res.json({
      success: true,
      lessons: firstBlock
    });
  } catch (error) {
    logger.error("Error en /api/init", error);
    res.status(500).json({ error: "Error al generar lecciones iniciales" });
  }
});

// Endpoint para recibir feedback del usuario
app.post('/api/feedback', validateUserInput, async (req, res) => {
  try {
    const { userId, lessonId, errors } = req.body;
    
    if (!userProgress[userId]) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Registrar errores
    if (errors?.length > 0) {
      userProgress[userId].errors.push(...errors.map(e => ({
        ...e,
        timestamp: new Date().toISOString()
      })));
      logger.info(`Errores registrados para ${userId}`, { count: errors.length });
    }
    
    // Marcar lección como completada
    userProgress[userId].completedLessons.push({
      lessonId,
      completedAt: new Date().toISOString()
    });

    // Generar nuevo bloque si es necesario
    if (userProgress[userId].completedLessons.length % 3 === 0) {
      const newBlock = await generateLessonBlock(userId);
      logger.info(`Nuevo bloque generado para ${userId}`, { block: newBlock.block });
      return res.json({ success: true, lessons: newBlock });
    }

    res.json({ success: true });
  } catch (error) {
    logger.error("Error en /api/feedback", error);
    res.status(500).json({ error: "Error al procesar feedback" });
  }
});

// Lógica de generación de bloques
async function generateLessonBlock(userId) {
  const userData = userProgress[userId];
  try {
    const blockNumber = Math.floor(userData.completedLessons.length / 3) + 1;
    
    const lessons = await Promise.all([
      buildLessons({
        type: 'new_content',
        topic: getTopicBasedOnInterests(userData.interests, userData),
        language: userData.language,
        level: userData.level
      }),
      buildLessons({
        type: 'related_content',
        previousLesson: null,
        language: userData.language,
        level: userData.level
      }),
      buildLessons({
        type: 'review',
        errors: userData.errors,
        language: userData.language,
        level: userData.level
      })
    ]);

    return {
      block: blockNumber,
      lessons,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    logger.error("Error generando bloque de lecciones", { userId, error });
    throw error;
  }
}

// Lógica de selección de temas mejorada
function calcularPeso(interest, userData) {
  const errorWeight = userData.errors
    .filter(e => e.topic === interest)
    .reduce((sum, e) => sum + (e.severity || 1), 0) * 0.7;

  const lastSeenWeight = userData.completedLessons
    .filter(lesson => lesson.topic === interest)
    .length * 0.4;

  const baseWeight = userData.interests.includes(interest) ? 1.2 : 1;
  
  return baseWeight + errorWeight - lastSeenWeight;
}

function seleccionarTema(weightedInterests) {
  const total = weightedInterests.reduce((sum, { weight }) => sum + weight, 0);
  const random = Math.random() * total;
  
  let accumulated = 0;
  for (const { topic, weight } of weightedInterests) {
    accumulated += weight;
    if (random <= accumulated) return topic;
  }
  
  return weightedInterests[0]?.topic || 'general';
}

function getTopicBasedOnInterests(interests, userData) {
  if (!interests?.length) return 'general';
  
  const weightedInterests = interests.map(interest => ({
    topic: interest,
    weight: calcularPeso(interest, userData)
  }));
  
  return seleccionarTema(weightedInterests);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Servidor iniciado en puerto ${PORT}`);
});