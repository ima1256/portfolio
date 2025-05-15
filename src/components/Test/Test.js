import Loading from './Loading';
import Video from './Video';
import CustomVideo from './CustomVideo';
import { Box, Stack, Typography } from '@mui/material';
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
import Projects from '../Portfolio/Projects/Projects';
// import { colors, Button } from '@imacorp/utils-components';
import { usePortfolio } from 'PortfolioContext';
import Header from 'components/Portfolio/Header/Header';
import { usePortfolioData, useProjects, useSections } from 'PortfolioHooks';
import { PortfolioProvider } from 'PortfolioContext';
import { PageBackground } from './PageBackground';
import { BotIcon } from '../icons/Icons';
import { gradientMap } from 'components/icons/gradients.tsx';
import VideoWithControls from 'components/Portfolio/About/VideoWithControls';
import LiveDemo from 'components/Portfolio/LiveDemo';
import CoverLetter from 'components/CoverLetter/CoverLetter';
import CompanyIntro from 'components/CoverLetter/CompanyIntro';
import PortfolioButton from 'components/CoverLetter/PortfolioButton';
import Project from 'components/Portfolio/Projects/Project';
import Spotlight from './Spotlight';

const Test = () => {
  const portfolioData = usePortfolioData();

  const [loading, setLoading] = useState(true);

  const projects = useProjects();

  const sections = useSections();

  const initialElems = [false, false, false];

  // const getId = (type) => {
  //   return type.name.toLowerCase();
  // };

  const [name, setName] = useState('Fade In Only');

  const [key, setKey] = useState(0);

  const [elems, setElems] = useState(initialElems);

  useEffect(() => {
    const handle = () => {
      setElems(initialElems);
      setName('Fade Out Only');
      setKey(key + 1);
    };
    eventBus.on('escSpotlight', handle);
    return () => {
      eventBus.off('escSpotlight', handle);
    };
  }, []);

  const handleClick = (index) => {
    const updated = [...elems];
    eventBus.emit('setSpotlight');
    updated[index] = true;
    setElems(updated);
  };

  return (
    <PortfolioProvider>
      <Stack className="h-full w-full justify-center items-center gap-2">
        {/* <CompanyIntro /> */}
        {/* {portfolioData.projects} */}
        {/* {portfolioData?.projects && (
          <Project project={portfolioData.projects?.[0]} />
        )} */}

        <Stack className="h-[80%] w-[80%] justify-center items-center relative border border-red-500">
          <PageBackground />
        </Stack>

        {/* <Spotlight />
        {elems.map((elem, index) => {
          return (
            <div
              key={index}
              className="relative w-[20%] h-[20%] flex items-center"
            >
              {elem && (
                <Animation
                  className="absolute flex p-2 border border-color-green border-dashed bg-white rounded-2xl hi transform 
                 -ml-4 -translate-x-full spotlight"
                  name={name}
                >
                  <Typography>Hola que t fsdfdsfsdfsafdafaf</Typography>
                </Animation>
              )}
              <div
                onClick={() => handleClick(index)}
                className={`absolute w-full h-full bg-red-500  ${
                  elem ? 'spotlight' : ''
                }`}
              ></div>
            </div>
          );
        })} */}
      </Stack>
    </PortfolioProvider>
  );
};

export default Test;
