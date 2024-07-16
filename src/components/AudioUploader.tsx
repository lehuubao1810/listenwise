// components/AudioUploader.tsx
"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { Sentence } from "@/type/Sentence";
import { host } from "@/constant/host";
import { ScanningScreen } from "./ScanningScreen";

const AudioUploader: React.FC = () => {
  const [transcript, setTranscript] = useState<Sentence[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [audioUrl, setAudioUrl] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // create url for audio file
    // const audioUrl = URL.createObjectURL(file);
    // setAudioUrl(audioUrl);
    // console.log(audioUrl);

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 95));
    }, 500);

    try {
      const response = await fetch(`${host.dev}/api/transcribe`, {
        method: "POST",
        body: formData,
      });
      clearInterval(interval);
      setProgress(100);

      const data = await response.json();
      const transcripts = data.transcripts;
      const script = transcripts.map((transcript: any) => {
        return {
          text: transcript.text,
          start: transcript.start,
          duration: transcript.duration,
          audio_path: `${host.dev}/${transcript.audio_path}`,
        };
      });
      if (response.ok) {
        setTranscript(script);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setProgress(0);
      }, 1000);
    }
  };

  return (
    <div>
      <input
        placeholder="file"
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {loading ? (
        <ScanningScreen progress={progress} />
      ) : (
        <AudioPlayer script={transcript} />
      )}
    </div>
  );
};

export default AudioUploader;
