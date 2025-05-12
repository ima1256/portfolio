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
// import { colors, Button } from '@imacorp/utils-components';
import { usePortfolio } from 'PortfolioContext';
import Header from 'components/Portfolio/Header/Header';
import { useProjects, useSections } from 'PortfolioHooks';
import { PortfolioProvider } from 'PortfolioContext';
import { PageBackground } from './PageBackground';
import { BotIcon } from '../icons/Icons';
import { gradientMap } from 'components/icons/gradients.tsx';

const Test = () => {
  const portfolioData = usePortfolio();

  const [loading, setLoading] = useState(true);

  const projects = useProjects();

  const sections = useSections();

  // const getId = (type) => {
  //   return type.name.toLowerCase();
  // };

  const [key, setKey] = useState('main');

  useEffect(() => {
    //console.log(gradientMap.complexRainbow, gradientMap.main.static);

    const interval = setInterval(() => {
      setKey(gradientMap.next());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack className="h-full justify-center items-center">
      <BotIcon gradientId={key} />
    </Stack>
  );
};

export default Test;
