import { Box, Button, Stack, Typography, IconButton } from '@mui/material';
import { forwardRef, useState, useRef, useEffect } from 'react';
import { Animation } from '../extra/AnimatedSection';
import VideoSide from './VideoSide';
import { animationIds } from '../../Test/Animations';

const MainTitle = ({ sx }) => {
  return (
    <Typography
      variant="h3" // Use h3 for a larger, more prominent title
      sx={[
        {
          fontWeight: 'bold',
          color: 'primary.main', // Primary theme color
          textAlign: 'center', // Center the text
          letterSpacing: 1.5, // Slight letter spacing for a clean look
          textTransform: 'uppercase', // Uppercase for a more dynamic feel
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
          lineHeight: 1.2, // Tighten the line height for more compact text
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow for depth
          transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
          '&:hover': {
            color: 'secondary.main', // Change color on hover
            transform: 'scale(1.05)', // Slightly scale up on hover for a dynamic effect
          },
        },
        sx, // Allow additional customizations via props
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
});

export default About;
