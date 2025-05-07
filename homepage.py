import openai
import requests

# Configurar la clave de API de OpenAI
openai.api_key = "API Key"

# --- Agente 1: Procesador de formulario ---
def procesar_formulario(datos_formulario):
    prompt_imagen = f"Genera cuatro imágenes basadas en: {datos_formulario['tema']}"
    prompt_audio = f"Genera un audio diciendo: {datos_formulario['mensaje']}"
    
    imagenes = generar_imagenes(prompt_imagen)
    audio = generar_audio(prompt_audio)

    return {"imagenes": imagenes, "audio": audio}

# --- Agente 2: Generador de imágenes ---
def generar_imagenes(prompt):
    response = openai.Image.create(
        prompt=prompt,
        n=4,  # Cantidad de imágenes a generar
        size="512x512"
    )
    return [img["url"] for img in response["data"]]

# --- Agente 3: Generador de audio ---
def generar_audio(prompt):
    response = openai.Audio.create(
        prompt=prompt,
        model="tts-1",  # Modelo de generación de voz
        voice="alloy"  # Voz utilizada
    )
    return response["audio_url"]

# Simulación de formulario recibido
datos_formulario = {
    "tema": "Animales salvajes en la selva",
    "mensaje": "Bienvenidos a esta aventura en la naturaleza."
}

# Ejecutar orquestación de agentes
resultado = procesar_formulario(datos_formulario)

# Mostrar resultados
print("Imágenes generadas:", resultado["imagenes"])
print("Audio generado:", resultado["audio"])