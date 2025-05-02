import { eventBus } from "../../eventBus";
import { useRef, useEffect } from "react";

const Video = () => {
  const src =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const startTimeRef = useRef(null);

  useEffect(() => {
    startTimeRef.current = performance.now(); // High-resolution time
  }, []);

  const onVideoLoaded = () => {
    const endTime = performance.now();
    const loadTimeMs = endTime - startTimeRef.current;

    // Emit the event with duration
    eventBus.emit("videoLoaded", { id: "intro", loadTimeMs });

    console.log(`Video loaded in ${loadTimeMs.toFixed(2)} ms`);
  };

  return (
    <>
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          //   opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        src={src}
        // poster={thumbnail}
        // muted={isMuted}
        loop
      />
    </>
  );
};

export default Video;
