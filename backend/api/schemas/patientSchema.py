from pydantic import BaseModel
from typing import List
from ..schemas import appointmentSchema

# request patient schema
class Patient(BaseModel):
    name: str
    email: str
    phone_no: str
    
    class Config():
        orm_mode = True


# response patient schema
class showPatient(BaseModel):
    name: str
    email: str
    phone_no: str
    appointments: List[appointmentSchema.showAppointment] = []
    
    class Config():
        orm_mode = True
