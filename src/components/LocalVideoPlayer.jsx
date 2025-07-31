import React, { useRef, useEffect } from "react";

const LocalVideoPlayer = ({ videoFileName }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.play();
    videoElement.muted = true;
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video ref={videoRef} className="absolute top-0 left-0 w-[120vw] h-[120vh] -translate-y-[8vh] scale-110 max-md:scale-[2.5] lg:scale-[1] max-sm:scale-[3] pointer-events-none" autoPlay loop muted playsInline>
        <source src={`src/assets/video/${videoFileName}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LocalVideoPlayer;
