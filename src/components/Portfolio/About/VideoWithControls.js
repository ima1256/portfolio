import { useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import VideoProgressLine from "./VideoProgressLine";

const VideoWithControls = ({
  showControls = true,
  video = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  width = "100%",
  borderRadius = "0",
  showProgressLine = true,
  thumbnail = "/images/video-test.jpeg"
}) => {
  const [isMuted, setIsMuted] = useState(false); // State to manage the muted/unmuted status



  const [isLoaded, setIsLoaded] = useState(true); // State to track loading

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  //Over START
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  //Over FINISH

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted; // Toggle mute state
    setIsMuted(!isMuted); // Update state
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {

    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
      }}
    >

      <div
        style={{
          position: "relative",
          width,
          aspectRatio: "16 / 9", // Keeps height stable before video loads
          backgroundColor: "black", // Prevents flashing
          borderRadius,
          overflow: "hidden",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          onCanPlayThrough={() => setIsLoaded(true)}
          src={video}
          poster={thumbnail}
          muted={isMuted}
          controls={false}
          loop
        />

        <VideoProgressLine show={showControls && isHovered} videoRef={videoRef}/>

        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            opacity: showControls && isHovered ? 1 : 0,
            transition: "all 1s ease",
          }}
          onClick={toggleMute}
        >
          <span style={{ color: "white", fontSize: "20px" }}>
            {isMuted ? "🔇" : "🔊"}
          </span>
        </div>
      </div>

      <Box sx={{ display: showControls ? "flex" : "none", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlay}
          disabled={isPlaying}
        >
          Play
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleStop}
          disabled={!isPlaying}
        >
          Stop
        </Button>
      </Box>
    </Box>
  );
};

export default VideoWithControls;
