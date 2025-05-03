import { useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import VideoProgressLine from './VideoProgressLine';
import MediaWithLoadEvent from '../../Test/MediaWithLoadEvent';
import { v4 as uuidv4 } from 'uuid'; // for unique video instance ID
import { eventBus } from '../../../eventBus';
import { useEffect } from 'react';
import SliderLine from '../../Test/SliderLine';

const VideoWithControls = ({
  showControls = true,
  video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  width = '100%',
  borderRadius = '0',
  showProgressLine = true,
  thumbnail = '/images/video-test.jpeg',
}) => {
  const [isMuted, setIsMuted] = useState(false); // State to manage the muted/unmuted status

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const idRef = useRef(uuidv4()); // Unique ID per instance
  const [firstInteracted, setFirstInteracted] = useState(false);

  const handleFirstInteracted = () => {
    setFirstInteracted(true);
  };

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {}
      <div
        style={{
          position: 'relative',
          width,
          aspectRatio: '16 / 9', // Keeps height stable before video loads
          backgroundColor: 'black', // Prevents flashing
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
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={video}
            poster={thumbnail}
            muted={isMuted}
            onEnded={handleVideoEnd}
            controls={false}
          />
        </MediaWithLoadEvent>

        <SliderLine
          show={showControls && isHovered && firstInteracted}
          videoRef={videoRef}
        />
        {/* 
        <VideoProgressLine
          show={showControls && isHovered && firstInteracted}
          videoRef={videoRef}
        /> */}

        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            padding: '5px',
            cursor: 'pointer',
            opacity: showControls && isHovered && firstInteracted ? 1 : 0,
            transition: 'all 1s ease',
          }}
          onClick={toggleMute}
        >
          <span style={{ color: 'white', fontSize: '20px' }}>
            {isMuted ? '🔇' : '🔊'}
          </span>
        </div>
      </div>

      <Box sx={{ display: showControls ? 'flex' : 'none', gap: 2 }}>
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
