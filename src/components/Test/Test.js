import Loading from './Loading';
import Video from './Video';
import CustomVideo from './CustomVideo';
import { Box, Stack } from '@mui/material';
import MediaWithLoadEvent from './MediaWithLoadEvent';
import { eventBus } from '../../eventBus';
import { useState, useEffect, useRef } from 'react';
import SliderLine from './SliderLine';
import HeaderBrand from '../Portfolio/Header/HeaderBrand';
import { motion } from 'framer-motion';
import AxisDemo from './AxisDemo';
import { TestAnimation } from '../Portfolio/extra/AnimatedSection';
import AnimationsPlayground from './AnimationsPlayground';
import About from '../Portfolio/About/About';
import { Animation } from '../Portfolio/extra/AnimatedSection';
import { animationIds } from './Animations';
import Projects from '../Portfolio/Projects';
import { colors, Button } from '@imacorp/utils-components';

const Test = () => {
  const src =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    const handler = (data) => {
      console.log('Video loaded:', data);

      setLoading(false);
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

  console.log(Button);

  return (
    <Stack className="h-full justify-center items-center">
      {/* <AnimationsPlayground>
        <HeaderBrand />
      </AnimationsPlayground> */}
      {/* <Animation id={animationIds.headerLogo} name="Rotate X" duration={1}>
        <HeaderBrand />
      </Animation>
      <About /> */}
      {JSON.stringify(Button)}
      <Button label="kick me" onClick={() => alert('clicked')}></Button>
      {/* <Projects></Projects> */}
    </Stack>
  );
};

export default Test;
