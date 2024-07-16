import Lottie from "react-lottie";
import * as scanningAnimation from "@/constant/animations/scanning_audio.json";
import Progress from "./ProgessUpload";

type ScanningScreenProps = {
  progress: number;
};

export const ScanningScreen: React.FC<ScanningScreenProps> = ({
  progress,
}: ScanningScreenProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scanningAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log("ScanningScreen", progress);

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white flex items-center justify-center flex-col">
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className="w-2/3">
        <Progress progress={progress} />
      </div>
    </div>
  );
};
