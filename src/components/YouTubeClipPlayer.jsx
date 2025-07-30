import React, { useEffect, useRef } from "react";

const YouTubeClipPlayer = ({ videoIdInp, startInp, endInp }) => {
  const playerRef = useRef(null);
  const isAPILoadedRef = useRef(false);

  useEffect(() => {
    // Check if YouTube API is already loaded
    if (!window.YT && !isAPILoadedRef.current) {
      isAPILoadedRef.current = true;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initializePlayer = () => {
      // Destroy existing player if it exists
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videoIdInp,
        playerVars: {
          autoplay: 1,
          start: startInp,
          end: endInp,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          showinfo: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              // Use dynamic start time instead of hardcoded 19
              playerRef.current.seekTo(startInp);
            }
          },
        },
      });
    };

    // If YouTube API is already loaded, initialize immediately
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      // Set up the callback for when API loads
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoIdInp, startInp, endInp]); // Add dependencies to re-initialize when props change

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-blue-900 z-5 pointer-events-none" />
      <div
        id="youtube-player"
        className="absolute top-0 left-0 w-[120vw] h-[120vh] -translate-x-[10vw] -translate-y-[10vh] scale-110 pointer-events-none"
      />
      {/* SVG Wave Overlay (White) */}
      <div className="absolute bottom-[-1px] left-0 w-full h-full pointer-events-none z-20 bg-transparent">
        <svg
          className="absolute bottom-[-1px] left-0 w-full h-auto"
          viewBox="0 0 1280 123"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 122V19.9723C118.988 59.0145 192.362 68.2817 345.283 42.9785C522.432 -8.57577 616.036 -17.2424 761.564 42.9785C861.022 71.3877 922.67 91.9819 1042.49 42.9785C1172.11 -0.893238 1222.01 3.27547 1280 49.9805V122H0Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default YouTubeClipPlayer;