from fastapi import APIRouter, Depends
from ..repository import user
from ..database import get_db
from sqlalchemy.orm import Session
from ..schemas import userSchema
from ..helper import oAuth2
from typing import List

router = APIRouter(
    prefix='/user',
    tags=['User Endpoints']
)

# create user
@router.post('/create', response_model=userSchema.showUser)
def create(request: userSchema.User, 
           db: Session = Depends(get_db), 
           current_user: userSchema.User = Depends(oAuth2.get_current_user)):
    return user.createUser(request, db)    

# get all users
@router.get('/alluser', response_model=List[userSchema.showUser])
def allUsers( 
             db: Session = Depends(get_db), 
             current_user: userSchema.User = Depends(oAuth2.get_current_user)):
    return user.getAllUser(db)

#all dashboard points
@router.get('/dashboard')
def dashboard(db: Session = Depends(get_db),  current_user: userSchema.User = Depends(oAuth2.get_current_user)):
    return user.allDashBoard(db);