import VideoWithControls from './VideoWithControls';
import { Box } from '@mui/material';
import { useMainVideo } from 'PortfolioHooks';
import { forwardRef } from 'react';

const VideoSide = forwardRef(({ sx }, ref) => {
  const video = useMainVideo();

  return (
    <Box sx={[{}, sx]} className="flex justify-center items-center">
      <VideoWithControls
        borderRadius="20px"
        aspectRatio="none"
        videoHeight="70vh"
        video={video}
      />
    </Box>
  );
});

export default VideoSide;
