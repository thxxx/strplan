import openai
import deepl
from dotenv import load_dotenv
import os

load_dotenv()

AZURE_API_KEY = os.getenv("AZURE_API_KEY")
API_BASE = os.getenv("API_BASE")

openai.api_type = "azure"
openai.api_key = AZURE_API_KEY
openai.api_base = API_BASE
openai.api_version = "2023-05-15"

def generate(prompt:str, systemMessage:str = "", model:str = "chatgpt") -> str:
    response = openai.ChatCompletion.create(
        engine = model,
        messages=[
                {"role": "system", "content": f"You a helpful assistant, {systemMessage}"},
                {"role": "user", "content": prompt},
            ],
        )
    
    response_body = {
        'data': response['choices'][0]['message']['content'],
        "prompt_tokens": 225,
        "completion_tokens": 106,
        "total_tokens": 331
    }

    return response_body
