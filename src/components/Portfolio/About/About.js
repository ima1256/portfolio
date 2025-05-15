import { Box, Button, Stack, Typography, IconButton } from '@mui/material';
import { forwardRef, useState, useRef, useEffect } from 'react';
import { Animation } from '../extra/AnimatedSection';
import VideoSide from './VideoSide';
import { animationIds } from '../../Test/Animations';
import { useTheme } from '@emotion/react';
import MainTitle from './MainTitle';

const About = ({ className = '' }) => {
  const videoRef = useRef(null);

  return (
    <Stack
      className={`${className}`}
      direction="column"
      sx={{ paddingX: 5, paddingTop: 7, position: 'relative' }}
    >
      <Stack
        direction="column" // Responsive direction change
        spacing={6}
        className="items-center justify-center"
      >
        <Animation
          id={animationIds.mainTitle}
          name="Slide Down"
          waitForAnimation={animationIds.headerLogo}
        >
          <MainTitle />
        </Animation>

        <Animation
          id={animationIds.mainVideo}
          name="Fade In Only"
          waitForAnimation={animationIds.mainTitle}
        >
          <VideoSide ref={videoRef} />
        </Animation>
      </Stack>
    </Stack>
  );
};

export default About;
