from pydantic import BaseModel
from datetime import datetime

class notes_model(BaseModel):
    title:str
    content:str

