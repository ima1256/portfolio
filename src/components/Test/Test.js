import Loading from './Loading';
import Video from './Video';
import CustomVideo from './CustomVideo';
import { Box, Stack } from '@mui/material';
import MediaWithLoadEvent from './MediaWithLoadEvent';
import { eventBus } from '../../eventBus';
import { useState, useEffect } from 'react';

const Test = () => {
  const src =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = (data) => {
      console.log('Video loaded:', data);

      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    };

    eventBus.on('mediaLoaded', handler);

    return () => {
      eventBus.off('mediaLoaded', handler); // Clean up
    };
  }, []);

  // if (loading) {
  //   return (
  //     <Stack className="justify-center items-center">
  //       <Loading size={20} />
  //     </Stack>
  //   );
  // }

  return (
    <Stack className="h-full justify-center items-center relative">
      {loading && <Loading size={18} />}
      <MediaWithLoadEvent id="myvideoid">
        <video
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: loading ? 0 : 1,
            // display: loading ? 'none' : 'block',
            transition: 'opacity 0.5s ease-in-out',
          }}
          preload="auto"
          src={src}
          // poster={thumbnail}
          // muted={isMuted}
          controls={true}
          loop
        />
      </MediaWithLoadEvent>

      {/* <CustomVideo /> */}
    </Stack>
  );
};

export default Test;
