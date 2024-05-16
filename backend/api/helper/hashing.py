from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'], deprecated = 'auto')

class Hash():
    
    def hashPassword(password: str):
        return pwd_context.hash(password)
    
    def verifyPassword(plainPassword: str, hashedPassword: str):
        return pwd_context.verify(plainPassword, hashedPassword)