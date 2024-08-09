import React, { useCallback, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Sentence } from "@/type/Sentence";
import { host } from "@/constant/host";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

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
  const [isHint, setIsHint] = useState<boolean>(false);

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
      waveSurferRef.current?.seekTo(0); // seek to the beginning of the audio
    }
  };
  const prevSentence = () => {
    setStatusAnswer("");
    setAnswer("");
    if (currentIndex > 0) {
      playAudio(currentIndex - 1);
      waveSurferRef.current?.seekTo(0);
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
    <div className="min-w-[65%] max-w-[65%]">
      <div ref={waveformRef} />
      <div
        className="flex gap-4 items-center justify-center w-full mt-10 relative
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      "
      >
        {currentIndex > 0 && (
          <button
            onClick={prevSentence}
            className="w-12 h-12 bg-blue-500 text-white rounded-full text-xl
              absolute top-1/2 left-[35%] transform -translate-y-1/2
            "
          >
            <FontAwesomeIcon icon={faBackward} /> {""}
          </button>
        )}
        <button
          className="w-12 h-12 bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-500 text-white rounded-full text-xl
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          "
          onClick={() => {
            if (isPlaying) {
              pauseAudio();
            } else {
              playAudio(currentIndex);
            }
          }}
        >
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        {currentIndex < script.length - 1 && (
          <button
            onClick={nextSentence}
            className="w-12 h-12 bg-blue-500 text-white rounded-full text-xl
              absolute top-1/2 right-[35%] transform -translate-y-1/2
            "
          >
            <FontAwesomeIcon icon={faForward} />
            {""}
          </button>
        )}
      </div>
      <div
        className="mt-8 w-full flex flex-col items-center justify-center relative"
        onSubmit={(e) => handleCheckAnswer(e)}
      >
        <form action="" className="flex w-full gap-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`mt-2 p-2 border-2 ${
              statusAnswer === ""
                ? "border-gray-300"
                : statusAnswer
                ? "border-green-500"
                : "border-red-500"
            } rounded-lg outline-none w-full`}
            placeholder="Type your answer here"
          />
          <button
            type="submit"
            className="mt-2 p-2 px-4 bg-blue-500 text-white rounded-full text-sm font-semibold"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setIsHint(!isHint)}
            className="mt-2 p-2 px-[0.7rem] bg-blue-500 text-white rounded-full"
          >
            💡
          </button>
        </form>
        {/* hint */}
        {isHint && (
          <div className="mt-4 p-2 relative">
            <span className="font-semibold">💡Hint:</span>{" "}
            {currentSentence?.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
