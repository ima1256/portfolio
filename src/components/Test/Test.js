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
import { usePortfolio } from 'PortfolioContext';
import Header from 'components/Portfolio/Header/Header';

const Test = () => {
  const portfolioData = usePortfolio();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = (data) => {
      setLoading(false);
    };

    eventBus.on('mediaLoaded', handler);

    return () => {
      eventBus.off('mediaLoaded', handler); // Clean up
    };
  }, []);

  return (
    <Stack className="h-full justify-center items-center">
      <Header></Header>
    </Stack>
  );
};

export default Test;
