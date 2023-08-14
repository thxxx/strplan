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

def synopsis_modify(prompt, synopsis, degree, info):
    synop_prompt = f"""
        You are a novel synopsis writer. Your task is improve the original synopsis. 

        Below, inside ``` is a instruction for the novel.
        ```
        {info}
        ```

        ORIGINAL_SYNOPSIS: {synopsis}

        And I want to get fixed synopsis by following the instruction below
        INSTRUCTION: {prompt}

        Preserve the original synopsis by the following float: {degree} (0: do not care about origin Synopsis, 1: Leave the original content intact.)
        In the original synopsis, between [ and ] is a instruction for what should be generated in that location.
    """

    output = generate(synop_prompt, systemMessage=output_text_system_message, model="chatgpt")
    print("결과 : ", output)
    return output

def synopsis_generate(prompt, synopsis, degree, info):
    synop_prompt = f"""
        You are a best-seller novel writer having published highest-grossing books. Do not include any other text except for the plot.
        Below, inside ``` is a information of novel.
        ```
        {info}
        ```

        Please make unique and creative plot of a Web novel that can be used when you write a Webnovel based on the above information.
        <Instructions>
        - Young readers prefer these keywords. Just keep that in mind. [\"The main character who happens to get a very good opportunity\", \"A very powerful main character from the start\", \"provocative, high-tension story\"]
        - plot is a summary of whole story of a web novel including the prologue and ending.
        - It would be good to add some unique and very creative stories.
        - Please make unique and creative plot of a Web novel that can be used when you write a Webnovel based on the above information.
        - Feel free to think outside the box. You can combine several unique elements.
    """

    output = generate(synop_prompt, systemMessage=output_text_system_message, model="chatgpt")
    print("결과 : ", output)
    return output

def plan_generate(dump, keywords):
    plan_prompt = f"""
        Below, inside ``` is what a writer wrote for planning a novel
        ```
        {dump}
        ```
        These are keywords of a novel : {keywords}

        By using above information, organize below elements
        - background: What is the concept and setting of the background world of this novel?
        - intention: What is the core theme consciousness and planning intention of the novel?
        - growth: How does the main character change as the novel progresses?
        - ending: What is the ending of this novel?
        - interest: What is the key elements that makes readers interested in novels?
        - event: What is the main events of this novel?

        Your output should be json dictionary with below key:value pairs. all values should be more than 1 and less than 4 sentences. all values should be korean.
        - background
        - intention
        - growth 
        - event
        - ending
        - interest
    """

    output = generate(plan_prompt, model="chatgpt")

    return output

def first_generate(info:str):
    first_prompt = f"""
        You are a best-seller writer having published highest-grossing books.
        Your task is to plan the first chapter of a novel, which is short story. What should be written in the first chapter? return the detail desciptions, not whole novel.
        Do not include any other text except for the json.

        The book description of the entire novel is described below delimited by ```
        Each aspect of the novel begins with tripple dash ---
        ```
        [[Book Description]]:
        {info}
        ```

        Please create an engaging first chapter for a web novel, ensuring it includes the following key elements as part of a json dictionary. and generate in this order:
        - event : Detail an extreme event that takes place in the first chapter. It has to be a big impact on the main character, usually positive. Include descriptions for the reader to understand the story and protagonist's behavior, thoughts, decision, story.
        - end : Conclude the first chapter with a cliffhanger that entices readers to continue the novel. Do not include explanations, just the novel's content.
        - start : Describe the beginning of the first chapter, introducing the main character without any special events.
        - descriptions : list (length 2 to 5). Include What should be fully explained to the reader to understand the story and protagonist's behavior, thoughts, decision, story.
        - chapter_title : Suggest a suitable title for the first chapter.

        Bear in mind the following instructions when crafting the chapter:

        1. Include detailed descriptions of the characters, their backgrounds, the protagonist's introduction, and their surrounding circumstances.
        2. Keep in mind these popular keywords: "The main character who happens to get a very good opportunity," "A very powerful main character from the start," and "provocative, high-tension story."
        3. Avoid vague expressions in the start, descriptions, event, and end segments, opting for detailed scenes and plausibility from novels.
        4. If romance is involved, do not let characters fall in love at first sight.
        5. The first chapter should not span more than one day. This is short story.

        To ensure quality, make sure to:

        - Provide context for the character's actions, the reasons behind an event, and the emotional connections between characters.
        - Offer enough explanations for a character's behavior.
        - Include descriptions explaining why the character made a certain decision.
        - Prioritize plausibility throughout the chapter.
        - If a character realize something, add detail descriptions about why and how the character realize it.
    """

    output = generate(first_prompt, model="chatgpt")

    return output




