import { Box, Button, Stack, Typography, IconButton } from '@mui/material';
import { forwardRef, useState, useRef, useEffect } from 'react';
import { Animation } from '../extra/AnimatedSection';
import VideoSide from './VideoSide';

const MainTitle = ({ sx }) => {
  return (
    <Typography
      variant="h4" // Adjusted for a more prominent heading
      sx={[
        {
          fontWeight: 'bold',
          color: 'primary.main',
          textAlign: 'center',
        },
        sx,
      ]}
    >
      1 Line At a Time!
    </Typography>
  );
};

const About = forwardRef(({ className = '' }, ref) => {
  const videoRef = useRef(null);

  return (
    <Stack className={`${className}`} direction="column" spacing={3}>
      <Stack
        direction="column" // Responsive direction change
        spacing={3}
        className="items-center justify-center"
      >
        <Animation
          id="main-title-animation"
          name="Slide Down"
          waitForAnimation="header-logo-animation"
        >
          <MainTitle />
        </Animation>

        <Animation
          id="main-video-animation"
          name="Slide Down"
          waitForAnimation="main-title-animation"
        >
          <VideoSide ref={videoRef} />
        </Animation>
      </Stack>
    </Stack>
  );
});

export default About;
