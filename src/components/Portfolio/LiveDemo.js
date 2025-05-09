import { Box, CircularProgress } from '@mui/material';
import { forwardRef, useState } from 'react';
import MediaWithLoadEvent from '../Test/MediaWithLoadEvent';
import { eventBus } from '../../eventBus';
import { useEffect } from 'react';

const LiveDemo = forwardRef(({ parentSX, project }, ref) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = (data) => {
      //console.log('Data loaded:', data);
      setLoading(false);
    };

    eventBus.on('mediaLoaded', handler);

    return () => {
      eventBus.off('mediaLoaded', handler); // Clean up
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={parentSX}
      className="flex items-center justify-center relative transition-opacity duration-500"
    >
      {/* iframe with onLoad event to trigger loader removal */}
      {project ? (
        <MediaWithLoadEvent>
          <iframe
            src={project.demo} // ✅ Real live demo hosted by Vercel
            style={{
              width: '70%',
              height: 'auto',
              border: 'none',
              // opacity: isLoaded ? 1 : 0, // Fade-in effect for iframe
              transition: 'opacity 1s', // Smooth transition for opacity
              transformOrigin: 'top left', // Keeps the content scaling from the top-left corner
              aspectRatio: '16/9',
            }}
            title="Live Demo"
          />
        </MediaWithLoadEvent>
      ) : null}
    </Box>
  );
});

export default LiveDemo;
