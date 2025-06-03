const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Generador de Texto Mejorado
// Funciones convertidas a CommonJS
module.exports = {
    generateText: async (prompt, language, level) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{
        role: "system",
        content: `Eres un tutor de ${language} para nivel ${level}. Genera contenido educativo sobre: ${prompt}`
      }],
      temperature: 0.7,
      max_tokens: 1000
    });
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error generando texto:", error);
    throw new Error("Failed to generate educational content");
  }
},

// Generador de Imágenes con DALL-E 3
 generateImage: async (prompt) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Estilo educativo infantil para: ${prompt}`,
    // Prompt Ej: Estilo 3d renderizado, estilo lego, estilo 2d, estilo cartoon, estilo realista.
    n: 1,
    size: "1024x1024",
    quality: "hd"
  });

  return response.data[0].url;
},

// Generador de Audio con TTS
generateAudio: async (text, language) => {
  const voiceMapping = {
    'Spanish': 'nova',
    'English': 'alloy',
    'French': 'echo'
  };

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: voiceMapping[language],
    input: text,
    response_format: "mp3"
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  return `data:audio/mp3;base64,${buffer.toString('base64')}`;
  }
};