from setting import generate
from prompt import synopsis_prompt_gen, output_array_system_message, output_text_system_message

def topic_generate(originalList, prompt, type, info):
    topic_prompt = f"""
        You are a best-seller web novel writer.

        Below, inside ``` is a instruction for the novel.
        ```
        {info}
        ```
    """

    if type == "re":
        rewrite_instruction = f"""
            This is current topics : {originalList}

            And I want to get topics by following the instruction below

            INSTRUCTION : {prompt}
        """
        topic_prompt += "\n" + rewrite_instruction
    
    topic_prompt += "\n" + "Based on the above information, write 4 topics for web novel."

    output = generate(topic_prompt, systemMessage=output_array_system_message, model="chatgpt")

    return output

def synopsis_generate(prompt, synopsis, degree, info):
    synop_prompt = synopsis_prompt_gen(prompt, synopsis, degree, info)
    output = generate(synop_prompt, systemMessage=output_text_system_message, model="chatgpt")
    print("결과 : ", output)
    return output









