import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import toast from "react-hot-toast";
import { Sentence } from "@/type/Sentence";
import { host } from "@/constant/host";

interface AudioPlayerProps {
  script: Sentence[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ script }) => {
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [statusAnswer, setStatusAnswer] = useState<"" | true | false>("");

  const playAudio = (index: number) => {
    const sentence = script[index];
    setCurrentSentence(sentence);

    if (waveSurferRef.current) {
      waveSurferRef.current.load(sentence.audio_path);
      waveSurferRef.current.on("ready", () => {
        waveSurferRef.current?.play();
        setIsPlaying(true);
        setCurrentIndex(index);
      });
    }
  };

  const pauseAudio = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextSentence = () => {
    setStatusAnswer("");
    setAnswer("");
    if (currentIndex < script.length - 1) {
      playAudio(currentIndex + 1);
    }
  };
  const prevSentence = () => {
    setStatusAnswer("");
    setAnswer("");
    if (currentIndex > 0) {
      playAudio(currentIndex - 1);
    }
  };

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: waveformRef.current!,
      waveColor: "#ddd",
      progressColor: "#4a90e2",
      height: 80,
      barWidth: 2,
      cursorWidth: 1,
      backend: "WebAudio",
    });

    waveSurferRef.current = waveSurfer;

    waveSurfer.on("finish", () => {
      // repeat the audio
      // playAudio(currentIndex);
      // pauseAudio();
      setIsPlaying(false);
    });

    return () => {
      waveSurfer.destroy();
    };
  }, []);

  const handleCheckAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    // Remove periods and commas from answer
    const answerCheck = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const sentenceCheck = currentSentence?.text.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
      ""
    );
    if (!sentenceCheck) {
      return;
    }
    console.log(answerCheck.toLowerCase());
    console.log(sentenceCheck.toLowerCase());
    if (
      currentSentence &&
      answerCheck.toLowerCase() === sentenceCheck.toLowerCase()
    ) {
      console.log("Correct");
      // toast.custom((t) => (
      //   <ToastCustome t={t} type="success" message="That's correct" />
      // ));
      setStatusAnswer(true);
    } else {
      console.log("Incorrect");
      // toast.custom((t) => (
      //   <ToastCustome
      //     t={t}
      //     type="error"
      //     message="That's incorrect. Please try again."
      //   />
      // ));
      setStatusAnswer(false);
    }
  };

  return (
    <div>
      <div ref={waveformRef} />
      <div className="flex gap-4">
        <button
          className="p-2 bg-blue-500 text-white rounded-lg"
          onClick={() => {
            if (isPlaying) {
              pauseAudio();
            } else {
              playAudio(currentIndex);
            }
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        {currentIndex < script.length - 1 && (
          <button
            onClick={nextSentence}
            className="p-2 bg-blue-500 text-white rounded-lg"
          >
            Next
          </button>
        )}
        {currentIndex > 0 && (
          <button
            onClick={prevSentence}
            className="p-2 bg-blue-500 text-white rounded-lg"
          >
            Previous
          </button>
        )}
      </div>
      <div className="mt-4" onSubmit={(e) => handleCheckAnswer(e)}>
        <form action="">
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`mt-2 p-2 border ${
              statusAnswer === ""
                ? "border-gray-300"
                : statusAnswer
                ? "border-green-500"
                : "border-red-500"
            } rounded-lg outline-none`}
            placeholder="Type your answer here"
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      {/* hint */}
      <div className="mt-4">
        <p>Hint: {currentSentence?.text}</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
