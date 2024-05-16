from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQL_ALCHEMY_DATABASE_URL = 'sqlite:///./blog.db'

engine = create_engine(SQL_ALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

sessionLocal = sessionmaker(autocommit = False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = sessionLocal()
    try:
        yield db
    finally: 
        db.close()