from sqlalchemy.orm import Session
from .. import models
from fastapi import HTTPException, status
from ..helper import hashing, token

def login_User(req, db: Session):

    user = db.query(models.User).filter(models.User.email == req.username).first()
    
    if not user: 
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'Invalid Credentials'
            )
        
    if not hashing.Hash.verifyPassword(req.password, user.password):
        raise HTTPException(
            status_code=401,
            detail=f'Invalid Password'
            )
        
    # generate jwt token and return it

    access_token = token.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}