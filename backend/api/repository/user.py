from .. import models
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from ..helper import hashing
from typing import List

def getAllUser(db: Session):
    
    allUsers = db.query(models.User).all()

    return allUsers

def createUser(req, db: Session):
    
    # check if user with email id exist or not
    if db.query(models.User).filter(models.User.email == req.email).first():
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"User with email {req.email} already exists!"
        )
        
    # create a new user instance
    new_user = models.User(
        name = req.name,
        email = req.email,
        password = hashing.Hash.hashPassword(req.password)
     )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

def allDashBoard(db: Session):    
    allPatient = db.query(models.Patient).all()
    allAppointemnt = db.query(models.Appointment).all()
    
    patientCount = len(allPatient)
    appointmentCount = len(allAppointemnt)
    
    return {"patient_count": patientCount, "appointment_count": appointmentCount}