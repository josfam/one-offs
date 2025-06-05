"""Main entry point"""

import json
from pathlib import Path
from fastapi import FastAPI, Response, status
from backend.app_factory import create_app

app = create_app()


@app.get('/')
def home_route():
    return {"message": "Here are some movies for you!"}
