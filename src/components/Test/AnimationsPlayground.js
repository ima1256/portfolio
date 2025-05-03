import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animations } from './Animations'; // Assuming animations is the object from the previous answer
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';

const AnimationsPlayground = ({ children }) => {
  // Get the keys (animation names) from the animations object
  const animationKeys = Object.keys(animations);
  const [currentAnimation, setCurrentAnimation] = useState(animationKeys[0]); // Start with the first animation key
  const [refresh, setRefresh] = useState(0);

  // Function to handle the key press event
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      // Move to the next animation
      const currentIndex = animationKeys.indexOf(currentAnimation);
      const nextIndex = (currentIndex + 1) % animationKeys.length;
      setCurrentAnimation(animationKeys[nextIndex]);
    } else if (event.key === 'ArrowLeft') {
      // Move to the previous animation
      const currentIndex = animationKeys.indexOf(currentAnimation);
      const prevIndex =
        (currentIndex - 1 + animationKeys.length) % animationKeys.length;
      setCurrentAnimation(animationKeys[prevIndex]);
    } else if (event.key === 'Enter') {
      setRefresh((prevRefresh) => prevRefresh + 1);
      // Trigger the animation to start again by refreshing
    }
  };

  // Add event listener for keydown events
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentAnimation]);

  const handleItemClick = (animationName) => {
    const currentIndex = animationKeys.indexOf(animationName);
    const nextIndex = (currentIndex + 1) % animationKeys.length;
    setCurrentAnimation(animationKeys[nextIndex]);
  };

  return (
    <Stack direction="row" className="w-full" justifyContent="space-between">
      {/* <div>{currentAnimation}</div> */}
      <List
        style={{
          scrollbarWidth: 'none', // For Firefox to hide the scrollbar
          msOverflowStyle: 'none', // For IE and Edge
        }}
        className="h-[400px] w-[250px] overflow-auto"
      >
        {animationKeys.map((name, index) => (
          <ListItemButton
            key={`listitem-${name}`}
            onClick={() => handleItemClick(name)} // Handle tab change}
          >
            <ListItemText primary={name} />
          </ListItemButton>
        ))}
      </List>
      <Box className="w-full h-full justify-center items-center flex">
        <motion.div
          key={`${currentAnimation}-${refresh}`}
          initial={animations[currentAnimation].initial}
          animate={animations[currentAnimation].animate} // Dynamically change the animation
          transition={animations[currentAnimation].transition} // Use the transition from the animation
        >
          {children}
        </motion.div>
      </Box>
    </Stack>
  );
};

export default AnimationsPlayground;
