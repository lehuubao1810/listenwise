# app/api/transcribe.py
from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
import whisper
from pydub import AudioSegment, silence
import nltk
import os

# Download the punkt tokenizer
nltk.download('punkt')

router = APIRouter()

def split_into_sentences(text, audio, silent_intervals):
    sentences = nltk.tokenize.sent_tokenize(text)
    words = text.split()
    word_duration = audio.duration_seconds / len(words)
    sentence_timings = []
    word_index = 0
    last_end = 0

    combined_sentence = ""
    combined_start = 0
    combined_word_count = 0

    for sentence in sentences:
        sentence_word_count = len(sentence.split())

        if combined_sentence:
            combined_sentence += " " + sentence
            combined_word_count += sentence_word_count
        else:
            combined_sentence = sentence
            combined_word_count = sentence_word_count
            combined_start = word_index * word_duration

        if combined_word_count >= 4:
            sentence_duration = combined_word_count * word_duration
            sentence_timings.append({
                "text": combined_sentence.strip(),
                "start": combined_start,
                "duration": sentence_duration
            })
            combined_sentence = ""
            combined_word_count = 0

        word_index += sentence_word_count

    # Add any remaining combined sentence
    if combined_sentence:
        sentence_duration = combined_word_count * word_duration
        sentence_timings.append({
            "text": combined_sentence.strip(),
            "start": combined_start,
            "duration": sentence_duration
        })

    return sentence_timings

def split_audio_by_sentences(audio_file_path, sentences):
    audio = AudioSegment.from_file(audio_file_path)
    segments = []

    for sentence in sentences:
        start_ms = sentence['start'] * 1000
        end_ms = start_ms + (sentence['duration'] * 1000)
        segment = audio[start_ms:end_ms]
        segment_path = f"temp/{sentence['start']}_{sentence['duration']}.wav"
        segment.export(segment_path, format="wav")
        segments.append({
            "text": sentence['text'],
            "start": sentence['start'],
            "duration": sentence['duration'],
            "audio_path": segment_path
        })

    return segments

@router.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    audio_file_path = f"temp/{file.filename}"
    with open(audio_file_path, "wb") as audio_file:
        audio_file.write(await file.read())

    try:
        # Load audio file
        audio = AudioSegment.from_file(audio_file_path)
        audio.export("temp/audio.wav", format="wav")  # Convert to WAV

        # Load Whisper model
        model = whisper.load_model("small")

        # Transcribe audio using Whisper
        result = model.transcribe("temp/audio.wav")
        transcript = result["text"]

        # Detect silent intervals in the audio file
        silent_intervals = silence.detect_silence(audio, min_silence_len=500, silence_thresh=-40)
        silent_intervals = [(start / 1000, stop / 1000) for start, stop in silent_intervals]

        # Split the transcript based on periods and detected silent intervals
        sentences = split_into_sentences(transcript.strip(), audio, silent_intervals)

        # Split audio by sentences and get audio segments
        segments = split_audio_by_sentences(audio_file_path, sentences)

        return {"transcripts": segments}

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

    finally:
        if os.path.exists(audio_file_path):
            os.remove(audio_file_path)
        if os.path.exists("temp/audio.wav"):
            os.remove("temp/audio.wav")
