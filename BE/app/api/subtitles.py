# app/api/subtitles.py
from fastapi import APIRouter, HTTPException
from youtube_transcript_api import YouTubeTranscriptApi

router = APIRouter()

@router.get("/subtitles")
async def get_subtitles(video_id: str):
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)

        # Initialize variables to hold the combined text and segments
        combined_text = ""
        segments = []

        for entry in transcript:
            combined_text += entry['text'] + " "  # Concatenate the text
            segments.append({
                "text": entry['text'],
                "start": entry['start'],
                "duration": entry['duration']
            })

        # Clean up the combined text
        combined_text = combined_text.strip().replace('\n', ' ')

        return {
            "complete_text": combined_text,
            "segments": segments
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
