from .database import Base
from sqlalchemy import String, Integer, Column, ForeignKey, Boolean, ARRAY
from sqlalchemy.orm import relationship


# User model
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
     
# patient Model
class Patient(Base):
    __tablename__ = 'patients'
    
    id = Column(Integer, primary_key=True, index=True)
    name= Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone_no = Column(String, nullable=False)
    
    appointments = relationship('Appointment', back_populates='patient')
    
# appointment Model
class Appointment(Base):
    __tablename__ = 'appointments'
    
    id = Column(Integer, primary_key=True, index=True)
    appointment_date = Column(String, nullable=False)
    appointment_time = Column(String, nullable=False)
    appointment_doctor = Column(String, nullable=False)
    patient_id = Column(Integer, ForeignKey('patients.id'))
    
    patient = relationship('Patient', back_populates='appointments')