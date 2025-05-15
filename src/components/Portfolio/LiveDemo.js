import { Box, CircularProgress } from '@mui/material';
import { forwardRef, useRef, useState } from 'react';
import MediaWithLoadEvent from '../Test/MediaWithLoadEvent';
import { eventBus } from '../../eventBus';
import { useEffect } from 'react';

const LiveDemo = ({}) => {
  const [loading, setLoading] = useState(true);

  const [project, setProject] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    eventBus.on('loadProject', (project) => {
      setProject(project);
    });
  }, []);

  useEffect(() => {
    const handler = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    eventBus.on('mediaLoaded', handler);

    return () => {
      eventBus.off('mediaLoaded', handler); // Clean up
    };
  }, []);

  // useEffect(() => {
  //   const iframe = ref.current?.querySelector('iframe');
  //   if (!iframe) return;

  //   const handleLoad = () => {};

  //   iframe.addEventListener('load', handleLoad);

  //   return () => iframe.removeEventListener('load', handleLoad);
  // }, [project?.demo]);

  if (!project) return null;

  return (
    <Box
      ref={ref}
      sx={{}}
      className="flex items-center justify-center relative transition-opacity duration-500"
    >
      {/* iframe with onLoad event to trigger loader removal */}
      {project?.demo && (
        // <MediaWithLoadEvent id="project">
        <iframe
          src={project.demo} // ✅ Real live demo hosted by Vercel
          style={{
            width: 'auto',
            height: '90vh',
            border: 'none',
            // opacity: isLoaded ? 1 : 0, // Fade-in effect for iframe
            transition: 'opacity 1s', // Smooth transition for opacity
            transformOrigin: 'top left', // Keeps the content scaling from the top-left corner
            aspectRatio: '16/9',
          }}
          onLoad={() =>
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          title="Live Demo"
        />
        // </MediaWithLoadEvent>
      )}
    </Box>
  );
};

export default LiveDemo;
