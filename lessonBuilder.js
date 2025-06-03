const { generateText, generateImage, generateAudio, analyzeErrors } = require('./agents');

async function buildLessons(params) {
    let lessonContent;
    
    switch(params.type) {
        case 'new_content':
            lessonContent = await buildNewContentLesson(params);
            break;
        case 'related_content':
            lessonContent = await buildRelatedContentLesson(params);
            break;
        case 'review':
            lessonContent = await buildReviewLesson(params);
            break;
        default:
            throw new Error('Tipo de lección no válido');
    }
    
    return {
        ...lessonContent,
        type: params.type,
        createdAt: new Date().toISOString()
    };
}

async function buildNewContentLesson({ topic, language, level }) {
    // Paso 1: Generar contenido educativo
    const textContent = await generateText(
        `Create a beginner lesson about ${topic} in ${language}`,
        language,
        level
    );
    
    // Paso 2: Generar imágenes relacionadas
    const mainImage = await generateImage(topic);
    const optionImages = await Promise.all([
        generateImage(`correct option for ${topic}`),
        generateImage(`incorrect option 1 for ${topic}`),
        generateImage(`incorrect option 2 for ${topic}`),
        generateImage(`incorrect option 3 for ${topic}`)
    ]);
    
    // Paso 3: Generar audio
    const audioContent = await generateAudio(textContent, language);
    
    // Paso 4: Estructurar la lección
    return {
        title: `Learn about ${topic}`,
        pages: [
            {
                title: `Introduction to ${topic}`,
                content: textContent,
                image: mainImage,
                audio: audioContent,
                questions: [
                    {
                        options: [
                            { text: await generateText(`Correct answer for ${topic} in ${language}`, language, level), correct: true },
                            { text: await generateText(`Incorrect answer 1 for ${topic} in ${language}`, language, level), correct: false },
                            { text: await generateText(`Incorrect answer 2 for ${topic} in ${language}`, language, level), correct: false },
                            { text: await generateText(`Incorrect answer 3 for ${topic} in ${language}`, language, level), correct: false }
                        ]
                    }
                ],
                images: optionImages.map((img, index) => ({
                    src: img,
                    correct: index === 0
                }))
            }
        ]
    };
}

async function buildRelatedContentLesson({ previousLesson, language, level }) {
    // Extraer el tema principal de la lección anterior
    const mainTopic = previousLesson.title.replace('Learn about ', '');
    
    // Generar un tema relacionado
    const relatedTopic = await generateText(
        `Suggest a related topic to ${mainTopic} for language learning in ${language}`,
        language,
        level
    );
    
    // Construir la lección como contenido nuevo
    return buildNewContentLesson({
        topic: relatedTopic,
        language,
        level
    });
}

async function buildReviewLesson({ errors, language, level }) {
    // Analizar errores para determinar el enfoque de repaso
    const analysis = await analyzeErrors(errors, language);
    
    // Generar contenido de repaso
    const reviewContent = await generateText(
        `Create a review lesson in ${language} focusing on: ${analysis}`,
        language,
        level
    );
    
    // Generar imágenes y audio
    const mainImage = await generateImage(`review lesson for ${analysis}`);
    const audioContent = await generateAudio(reviewContent, language);
    
    // Crear ejercicios específicos para los errores
    const exercises = await Promise.all(
        errors.slice(0, 3).map(async error => {
            const exercise = await generateText(
                `Create an exercise to practice: ${error.mistake} in ${language}`,
                language,
                level
            );
            const correctAnswer = await generateText(
                `Correct version of: ${error.userInput} in ${language}`,
                language,
                level
            );
            const incorrectAnswers = await Promise.all([
                generateText(`Incorrect version related to: ${error.userInput} in ${language}`, language, level),
                generateText(`Incorrect version related to: ${error.userInput} in ${language}`, language, level),
                generateText(`Incorrect version related to: ${error.userInput} in ${language}`, language, level)
            ]);
            
            return {
                question: exercise,
                options: [
                    { text: correctAnswer, correct: true },
                    ...incorrectAnswers.map(text => ({ text, correct: false }))
                ]
            };
        })
    );
    
    return {
        title: `Review: ${analysis.split('\n')[0]}`,
        pages: [
            {
                title: "Let's review!",
                content: reviewContent,
                image: mainImage,
                audio: audioContent,
                questions: exercises
            }
        ]
    };
}

module.exports = { buildLessons };