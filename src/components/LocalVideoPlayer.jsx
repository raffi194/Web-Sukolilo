import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';

const LocalVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
    videoRef.current?.play();
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        key={videoSrc} 
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

LocalVideoPlayer.propTypes = {
    videoSrc: PropTypes.string.isRequired,
};

export default LocalVideoPlayer;