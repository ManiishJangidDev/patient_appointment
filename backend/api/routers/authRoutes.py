from fastapi import APIRouter, Depends
from ..schemas import authSchemas
from sqlalchemy.orm import Session
from ..database import get_db
from ..repository import auth
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter(
    prefix='/auth',
    tags=['authentication']
)

@router.post('/login')
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    return auth.login_User(request, db)