from pydantic import BaseModel
from typing import List

class Appointment(BaseModel):
    appointment_date: str
    appointment_time: str
    appointment_doctor: str
    patient_id: int
    
    class Config():
        orm_mode = True
        
        
class showAppointment(BaseModel):
    appointment_date: str
    appointment_time: str
    appointment_doctor: str
    
    class Config():
        orm_mode = True