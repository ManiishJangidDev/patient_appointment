from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models
from .database import engine
from .routers import appointmentRoute, authRoutes, userRoute, patientRoute

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authRoutes.router)
app.include_router(userRoute.router)
app.include_router(patientRoute.router)
app.include_router(appointmentRoute.router)