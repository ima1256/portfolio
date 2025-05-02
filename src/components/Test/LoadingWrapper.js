import Loading from './Loading';
import Video from './Video';
import CustomVideo from './CustomVideo';
import { Box, Stack } from '@mui/material';
import MediaWithLoadEvent from './MediaWithLoadEvent';
import { eventBus } from '../../eventBus';
import { useState, useEffect } from 'react';

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = (data) => {
      console.log('Video loaded:', data);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    eventBus.on('mediaLoaded', handler);

    return () => {
      eventBus.off('mediaLoaded', handler); // Clean up
    };
  }, []);

  return (
    <Stack className="h-full justify-center items-center relative">
      {loading && <Loading size={18} />}
      {children}
    </Stack>
  );
};

export default LoadingWrapper;
