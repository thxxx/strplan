import openai
import deepl
# from dotenv import load_dotenv
# import os

# load_dotenv()

# AZURE_API_KEY = os.getenv("AZURE_API_KEY")
# API_BASE = os.getenv("API_BASE")

AZURE_API_KEY="d93cb4e1e7644e74b4e64a72c6e1315c"
API_BASE = "https://thingsflow-ai-instance.openai.azure.com/"

openai.api_type = "azure"
openai.api_key = AZURE_API_KEY
openai.api_base = API_BASE
openai.api_version = "2023-05-15"

def generate(prompt:str, systemMessage:str = "", model:str = "chatgpt") -> str:
    print("입력이 들어옴")

    response = openai.ChatCompletion.create(
        engine = model,
        messages=[
                {"role": "system", "content": f"You a helpful assistant, {systemMessage}"},
                {"role": "user", "content": prompt},
            ],
        )
    
    print(response)

    response_body = {
        'data': response['choices'][0]['message']['content'],
        "prompt_tokens": response['usage']['prompt_tokens'],
        "completion_tokens": response['usage']['completion_tokens'],
        "total_tokens": response['usage']['total_tokens']
    }

    return response_body
