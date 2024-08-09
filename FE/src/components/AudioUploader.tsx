// components/AudioUploader.tsx
"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { Sentence } from "@/type/Sentence";
import { host } from "@/constant/host";
import { ScanningScreen } from "./ScanningScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

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
      const segments = data.segments;
      const script = segments.map((segment: any) => {
        return {
          text: segment.text,
          start: segment.start,
          duration: segment.duration,
          audio_path: `${host.dev}/${segment.audio_path}`,
        };
      });
      if (response.ok) {
        setTranscript(script);
      }
    } catch (error) {
      console.log(error);
      toast.error("We're updating our servers. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setProgress(0);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="mb-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-500 
      h-14 w-60 rounded-full relative flex items-center justify-center cursor-pointer group"
      >
        <FontAwesomeIcon
          className="text-2xl text-white group-hover:scale-[1.15] transition-all"
          icon={faUpload}
        />
        <input
          placeholder="file"
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer"
        />
      </div>
      {loading ? (
        <ScanningScreen progress={progress} />
      ) : transcript.length > 0 ? (
        <AudioPlayer script={transcript} />
      ) : (
        <div className="text-center font-semibold">
          Please upload an audio file to practice speaking
        </div>
      )}
    </div>
  );
};

export default AudioUploader;
