import { useEffect, useState, useRef } from 'react';
import { Box, Slider } from '@mui/material';

const SliderLine = ({
  show = true,
  videoRef = null,
  width = 90,
  bottom = '0%',
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Sync video time with slider
  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSliderChange = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.currentTime = (newValue / 100) * duration;
      setCurrentTime((newValue / 100) * duration);
    }
  };

  // When dragging starts, pause time updates to prevent syncing issues
  const handleSliderStart = () => {
    setIsDragging(true);
    videoRef.current.volume = false; // Mute the video while dragging
  };

  const handleSliderEnd = () => {
    setIsDragging(false);
    videoRef.current.volume = true; // Mute the video while dragging
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.addEventListener('timeupdate', handleTimeUpdate);
    videoEl.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      videoEl.removeEventListener('timeupdate', handleTimeUpdate);
      videoEl.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoRef, isDragging]);

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom,
        left: `${(100 - width) / 2}%`,
        width: `${width}%`,
        opacity: show ? 1 : 0,
        transition: 'all 1s ease',
      }}
    >
      {/* Video Progress Slider */}
      <Slider
        value={duration > 0 ? (currentTime / duration) * 100 : 0}
        min={0}
        max={100}
        step={0.1}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderEnd}
        onMouseDown={handleSliderStart}
        onTouchStart={handleSliderStart}
        sx={{
          '& .MuiSlider-thumb': {
            backgroundColor: 'primary.main',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#ccc',
          },
          '& .MuiSlider-track': {
            backgroundColor: 'primary.main',
          },
        }}
      />
    </Box>
  );
};

export default SliderLine;
