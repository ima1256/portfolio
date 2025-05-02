
import VideoWithControls from "./VideoWithControls";
import { Box } from '@mui/material'
import { forwardRef } from "react";

const VideoSide = forwardRef(({ sx }, ref) => {
  return (
    <Box
      ref={ref}
      sx={[
        {
          // transform: "translateX(-100%)", // Start from the left
          // animation: "moveLeft 2s forwards", // Apply animation
          // transition: "all 2s ease-out",
        },
        sx,
      ]}
      className="flex justify-center items-center"
    >
      <VideoWithControls borderRadius="3%" width="500px" showControls={true} />
    </Box>
  );
});

export default VideoSide