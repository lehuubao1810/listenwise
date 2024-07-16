# app/main.py
from fastapi import FastAPI
from app.api.transcribe import router as transcribe_router
from app.api.subtitles import router as subtitles_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the static files directory
app.mount("/temp", StaticFiles(directory="temp"), name="temp")

# Include the transcription and subtitles routers
app.include_router(transcribe_router, prefix="/api")
app.include_router(subtitles_router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
