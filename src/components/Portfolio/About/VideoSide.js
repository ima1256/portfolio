import VideoWithControls from './VideoWithControls';
import { Box } from '@mui/material';
import { forwardRef } from 'react';

const VideoSide = forwardRef(({ sx }, ref) => {
  return (
    <Box sx={[{}, sx]} className="flex justify-center items-center">
      <VideoWithControls borderRadius="3%" width="60%" showControls={true} />
    </Box>
  );
});

export default VideoSide;
