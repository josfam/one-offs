from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from backend.api.v1.routers.films import films_router
import os

# load environment variables
load_dotenv()


def create_app():
    """Creates the backend app instance"""
    app = FastAPI()
    app.include_router(films_router)
    allowed_origins = [os.getenv('FRONTEND_CLIENT_ADDRESS')]
    # set up CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app
