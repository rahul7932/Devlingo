from fastapi import FastAPI
from app.api import api_router

app = FastAPI()

# Include all the routes from api.py
app.include_router(api_router)
