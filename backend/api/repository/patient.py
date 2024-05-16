from sqlalchemy.orm import Session 
from fastapi import HTTPException, status
from .. import models

# create patients
def create_patient(req, db: Session):
    
    if db.query(models.Patient).filter(models.Patient.email == req.email).first():
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f'Patient with this mail id already exist!'
                            )
        
    new_patient = models.Patient(name = req.name, email = req.email, phone_no = req.phone_no)
    db.add(new_patient)
    db.commit()
    db.refresh(new_patient)
        
    return new_patient


# show all patients
def show_all_patients(db: Session):
    
    allBlogs = db.query(models.Patient).all()
    
    return allBlogs

# patient details page
def patient_details(id, db: Session):
    
    patient = db.query(models.Patient).filter(models.Patient.id == id).first()
    
    if not patient: 
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f'patient with Id: {id} not found!'
            )
        
    
    return patient