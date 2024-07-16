// components/Progress.tsx
import React from "react";

interface ProgressProps {
  progress: number;
}

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <div className="transition-all w-full">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          className={`w-[${progress}%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
