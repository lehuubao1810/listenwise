import AudioUploader from "@/components/AudioUploader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        ListenWise - Practice English Listening
      </h1>
      <AudioUploader />
    </main>
  );
}
