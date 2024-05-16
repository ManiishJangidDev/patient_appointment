from fastapi import APIRouter, Depends
from ..schemas import userSchema, appointmentSchema
from sqlalchemy.orm import Session
from ..database import get_db
from ..helper import oAuth2
from ..repository import appointment

router = APIRouter(
    prefix='/appointment',
    tags=['appointment']
)

@router.post('/create')
def create(
    request: appointmentSchema.Appointment,
    db: Session = Depends(get_db),
    current_user: userSchema.User = Depends(oAuth2.get_current_user)
    ):
    return appointment.createAppointment(request, db)