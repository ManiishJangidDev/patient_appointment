from sqlalchemy.orm import Session
from .. import models

def createAppointment(req, db: Session):
    
    new_appointment = models.Appointment(
        appointment_date = req.appointment_date,
        appointment_time = req.appointment_time,
        appointment_doctor = req.appointment_doctor,
        patient_id = req.patient_id
        )

    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)
    
    return {
        "success": True,
        "data": {
            "appointment": new_appointment,
            "paymentLink": "https://buy.stripe.com/test_eVa7vU72j2ye8FO7ss",
        },
        "message": "Appointment Created Successfully!"
    }