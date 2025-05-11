import openai
import os
from dotenv import load_dotenv
# AI Orchestation example
# Load the API KEY from environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Step 1: Reasoning Agent
def agent_razonador(form_input):
    """
    Processes the form input and generates a statement for the lesson.
    """
    prompt = f"Analyze the following form and generate a statement that will be used for a lesson: '{form_input}'\n"
    prompt += "Example response: 'He is an Entrepreneur'."
    response = openai.ChatCompletion.create(
         model="gpt-4",
         messages=[{"role": "user", "content": prompt}]
    )
    razonador_output = response["choices"][0]["message"]["content"].strip()
    return razonador_output

# Step 2: TTS Agent (Text-to-Speech)
def agent_tts(text):
    """
    Receives the text and generates audio using a TTS model.
    Note: This assumes the existence of a TTS endpoint in OpenAI.
    """
    response = openai.Audio.create(
         model="tts-1",
         input=text,
         voice="en-US-Wavenet-D"  # Example voice
    )
    audio_url = response['url']  # It is assumed that the response returns a URL to the generated audio
    return audio_url

# Step 3: Image Agent
def agent_images(text):
    """
    Generates 4 images: one that accurately represents the statement and 3 distractors.
    """
    prompts = [
         text,  # Correct prompt: "He is an Entrepreneur"
         "A musician performing on a busy street",  # Distractor 1
         "A scientist working in a futuristic laboratory",  # Distractor 2
         "A chef preparing a gourmet meal"  # Distractor 3
    ]
    
    image_urls = []
    for prompt in prompts:
        response = openai.Image.create(
              model="dall-e-3",
              prompt=prompt,
              n=1,
              size="512x512"
        )
        url = response["data"][0]["url"]
        image_urls.append(url)
    
    return image_urls

# Step 4: Code Generator Agent
def agent_code(text, audio_url, image_urls):
    """
    Generates the HTML code for a complete lesson using the information from the other agents.
    The lesson will include:
    - The statement (e.g., "He is an Entrepreneur").
    - The generated audio.
    - A grid with 4 images (the first being the correct one and the others, distractors).
    """
    prompt = f"""Generate HTML code for an interactive lesson about '{text}'. 
Include the following:
- Display the lesson text: '{text}'.
- Embed the generated audio from the URL: {audio_url}.
- Create a grid of 4 options displaying the following images:
   Option 1 (correct): {image_urls[0]}
   Option 2: {image_urls[1]}
   Option 3: {image_urls[2]}
   Option 4: {image_urls[3]}
The output must be a single complete block of HTML code."""
    
    response = openai.ChatCompletion.create(
         model="gpt-4",
         messages=[{"role": "user", "content": prompt}]
    )
    html_code = response["choices"][0]["message"]["content"].strip()
    return html_code

# Main function to orchestrate the agent flow
def main():
    # Information provided by the user's form
    form_input = "Me gustaría aprender sobre emprendimiento y liderazgo."
    
    # Agent 1: Process the form and generate the statement
    razonador_output = agent_razonador(form_input)
    print("Reasoning Agent Output:", razonador_output)
    
    # Agent 2: Generate audio from the Reasoning Agent's text
    audio_url = agent_tts(razonador_output)
    print("Generated audio (URL):", audio_url)
    
    # Agent 3: Generate 4 images based on the statement
    image_urls = agent_images(razonador_output)
    print("Generated images (URLs):")
    for i, url in enumerate(image_urls, start=1):
         print(f"Option {i}: {url}")
    
    # Agent 4: Generate a complete lesson in HTML using the collected information
    lesson_html = agent_code(razonador_output, audio_url, image_urls)
    print("\nHTML code for the lesson:")
    print(lesson_html)

if __name__ == "__main__":
    main()
