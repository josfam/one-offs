from fastapi import APIRouter, Response, status
from pathlib import Path
import json

films_router = APIRouter(
    prefix="/api/v1/films",
    tags=["films"],
)


@films_router.get('/recommendations', status_code=200)
def get_recommendations(response: Response):
    """Returns films in the film list file that have not been watched yet"""
    films_obj = None
    # determine storage path from the script's directory
    script_dir = Path(__file__).parent.parent
    film_file = str(script_dir / 'storage' / 'films.json')

    try:
        with open(film_file, 'r', encoding='utf-8') as f:
            films_obj = json.load(f)
    except Exception as e:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {"message": "Can't load the films right now. Try again"}
    return {"message": "Films loaded successfully", "data": films_obj}
