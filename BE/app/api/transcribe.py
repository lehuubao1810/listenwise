# app/api/transcribe.py
from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
import whisper
from pydub import AudioSegment, silence
import nltk
import os
import whisper_timestamped as whisper
# import json
# from types import SimpleNamespace

# Download the punkt tokenizer
nltk.download('punkt')

router = APIRouter()


def split_audio_by_sentences(audio_file_path, sentences):
    audio = AudioSegment.from_file(audio_file_path)
    segments = []

    for sentence in sentences:
        start_ms = (sentence['start']-0.5) * 1000
        end_ms = ((sentence['end']+0.5) * 1000)
        segment = audio[start_ms:end_ms]
        segment_path = f"temp/{sentence['start']}_{sentence['end']}.wav"
        segment.export(segment_path, format="wav")
        segments.append({
            "text": sentence['text'],
            "start": sentence['start'],
            "duration": round(sentence['end'] - sentence['start'],2),
            "audio_path": segment_path,
            # "words": sentence['words']
        })

    return segments


@router.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    audio_file_path = f"temp/{file.filename}"
    with open(audio_file_path, "wb") as audio_file:
        audio_file.write(await file.read())

    try:
        # Load audio file
        audio = whisper.load_audio(audio_file_path)
        # audio.export("temp/audio.wav", format="wav")  # Convert to WAV

        # Load Whisper model
        model = whisper.load_model("small")

        # Transcribe audio using Whisper
        result = whisper.transcribe(model, audio, language="en")
        
        # jsonResult = json.dumps(result, indent = 2, ensure_ascii = False)
        # transcript = json.loads(jsonResult, object_hook=lambda d: SimpleNamespace(**d))
        

        # # Detect silent intervals in the audio file
        # silent_intervals = silence.detect_silence(audio, min_silence_len=500, silence_thresh=-40)
        # silent_intervals = [(start / 1000, stop / 1000) for start, stop in silent_intervals]

        # # Split the transcript based on periods and detected silent intervals
        # sentences = split_into_sentences(transcript.strip(), audio, silent_intervals)

        # # Split audio by sentences and get audio segments
        segments = split_audio_by_sentences(audio_file_path, result['segments'])
        
        response = {
            "transcript": result['text'],
            "segments": segments
        }

        return response

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

    finally:
        if os.path.exists(audio_file_path):
            os.remove(audio_file_path)
        if os.path.exists("temp/audio.wav"):
            os.remove("temp/audio.wav")
