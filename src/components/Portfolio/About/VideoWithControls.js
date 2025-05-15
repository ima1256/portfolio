import { useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import VideoProgressLine from './VideoProgressLine';
import MediaWithLoadEvent from '../../Test/MediaWithLoadEvent';
import { v4 as uuidv4 } from 'uuid'; // for unique video instance ID
import { eventBus } from '../../../eventBus';
import { useEffect } from 'react';
import SliderLine from '../../Test/SliderLine';

import { Stack } from '@mui/material';
import PlayButton from './PlayButton';
import StopButton from './StopButton';
import MuteButton from './MuteButton';

const VideoWithControls = ({
  showControls = false,
  video = '',
  borderRadius = '0',
  showProgressLine = true,
  videoHeight = 'auto',
  aspectRatio = '16/9',
  thumbnail = '',
  autoPlay = true,
  loop = false,
}) => {
  const [isMuted, setIsMuted] = useState(true); // State to manage the muted/unmuted status

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const idRef = useRef(uuidv4()); // Unique ID per instance
  const [firstInteracted, setFirstInteracted] = useState(false);

  const handleFirstInteracted = () => {
    setFirstInteracted(true);
  };

  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setVideoSize({ width, height });
    });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVideoPlaying = (playingId) => {
      if (playingId !== idRef.current && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    eventBus.on('videoPlaying', handleVideoPlaying);
    return () => {
      eventBus.off('videoPlaying', handleVideoPlaying);
    };
  }, []);

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
      if (!firstInteracted) handleFirstInteracted();
      videoRef.current.play();
      setIsPlaying(true);
      eventBus.emit('videoPlaying', idRef.current);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    videoRef.current.currentTime = 0; // Reset the video time to the beginning
  };

  return (
    <Stack
      spacing={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio, // Keeps height stable before video loads
          borderRadius,
          overflow: 'hidden',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MediaWithLoadEvent id={idRef.current}>
          <video
            ref={videoRef}
            style={{
              width: 'auto',
              height: videoHeight,
              maxHeight: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
            src={video}
            poster={thumbnail}
            muted={isMuted}
            onEnded={handleVideoEnd}
            controls={video ? true : false}
            autoPlay
            loop
          />
        </MediaWithLoadEvent>

        {/* <SliderLine
          show={showControls && !firstInteracted}
          videoRef={videoRef}
        /> */}

        {/* <MuteButton
          show={isHovered && firstInteracted}
          isMuted={isMuted}
          onClick={toggleMute}
        /> */}
      </div>
      <Box
        sx={{
          display: showControls ? 'flex' : 'none',
          gap: 2,
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <PlayButton disabled={isPlaying} onClick={() => handlePlay()} />
        <StopButton disabled={!isPlaying} onClick={() => handleStop()} />
      </Box>
    </Stack>
  );
};

export default VideoWithControls;
