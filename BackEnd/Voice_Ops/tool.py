from langchain.tools import tool
from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

model = ChatGroq(
    model="openai/gpt-oss-20b",
)

@tool
def add_note(title:str,content:str):
    """
        Create a new note with a title and the content 
    """
    # mongo db code
    print(title)
    print(content)

    return  f"Note {title} added succesfully"

model_with_tool = model.bind_tools([add_note])

text = "add a note title DSA , i need to revise Graphs and Dynamic Programmin"

response = model_with_tool.invoke(text)

for tool_call in response.tool_calls:

    if tool_call["name"] == "add_note":

        result = add_note.invoke(tool_call["args"])

        print(result)

