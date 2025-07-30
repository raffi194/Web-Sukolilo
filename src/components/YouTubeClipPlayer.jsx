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
      <div
        id="youtube-player"
        className="absolute top-0 left-0 w-[120vw] h-[120vh] -translate-x-[10vw] -translate-y-[10vh] scale-110 max-md:scale-[2.5] lg:scale-[1] max-sm:scale-[3] pointer-events-none"
      />
    </div>
  );
};

export default YouTubeClipPlayer;