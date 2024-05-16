from fastapi import APIRouter, Depends
from ..helper import oAuth2
from ..repository import patient
from ..schemas import patientSchema, userSchema
from sqlalchemy.orm import Session
from ..database import get_db
from typing import List

router = APIRouter(
    prefix='/patient',
    tags=['Patient Routes']
)

# create patient
@router.post('/create', response_model=patientSchema.showPatient)
def create(
            request: patientSchema.Patient, 
            db: Session = Depends(get_db),
            current_user: userSchema.User = Depends(oAuth2.get_current_user)):
    return patient.create_patient(request, db)


#get all patients
@router.get('/allPatient', response_model= List[patientSchema.showPatient])
def allPatient(db: Session = Depends(get_db), current_user: userSchema.User = Depends(oAuth2.get_current_user)):
    return patient.show_all_patients(db)


# get patient info
@router.get('/{id}', response_model=patientSchema.showPatient)
def patientDetail(
    id,
    db: Session = Depends(get_db),
    current_user: userSchema.User = Depends(oAuth2.get_current_user)
    ):
    return patient.patient_details(id, db)