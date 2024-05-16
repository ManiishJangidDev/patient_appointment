from pydantic import BaseModel

# login reques schema
class Login(BaseModel):
    username: str
    password: str
    
    class Config():
        orm_mode = True
        
# login response schema



# models for tokens are 
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None
    scopes: list[str] = []