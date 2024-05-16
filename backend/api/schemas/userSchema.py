from pydantic import BaseModel
from typing import List

# user request schema
class User(BaseModel):
    name: str
    email: str
    password: str
    
    class Config():
        orm_mode = True
        
        
# user response schema
class showUser(BaseModel):
    name: str
    email: str
    
    class Config():
        orm_mode = True