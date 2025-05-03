import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

//line height
//dot height
//percentage of parent width
//bottom

const VideoProgressLine = ({
  show,
  videoRef,
  lineSize = 5,
  dotSize = 15,
  width = 90,
  bottom = '7.5%',
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const theme = useTheme();

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.removeEventListener(
          'loadedmetadata',
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const progress = (currentTime / duration) * 100;

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom,
        left: `${(100 - width) / 2}%`,
        width: `${width}%`,
        height: lineSize,
        backgroundColor: '#ccc',
        borderRadius: `${lineSize * 10}px`,
        opacity: show ? 1 : 0,
        transition: 'all 1s ease',
      }}
    >
      {/* Moving Dot */}
      <div
        style={{
          position: 'absolute',
          top: `50%`, // to align the dot in the middle of the line

          left: `${progress}%`,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          transform: 'translate(-50%, -50%)', // to center the dot on the progress line
          transition: 'left 0.1s linear', // smooth transition for dot movement
          cursor: 'pointer',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '0', // Aligns with the outer line
          width: `${progress}%`, // Progress width, can be updated dynamically
          height: '100%', // Ensure it spans the full height of the outer div
          backgroundColor: theme.palette.primary.main, // Progress color
          borderRadius: '50px',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
};

export default VideoProgressLine;
