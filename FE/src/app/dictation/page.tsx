import AudioUploader from "@/components/AudioUploader";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Dictation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-extrabold leading-[1.15] bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-500 bg-clip-text text-transparent sm:text-6xl">
          ListenWise
        </h1>
        <hr />
        <span className="text-4xl font-extrabold leading-[1.15] text-zinc-800 sm:text-5xl">
          Practice English Listening
        </span>
      </div>

      <AudioUploader />
    </div>
  );
}
