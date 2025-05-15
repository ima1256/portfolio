import { Button, Stack } from '@mui/material';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills';
import Contact from './Contact';
import LiveCoding from './LiveCoding';
import Footer from './Footer';
import LiveDemo from './LiveDemo';
import { useRef, useState } from 'react';
import Timeline from './Timeline';
import TextSide from './About/TextSide';
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { AnimatedSection, AnimatedMain } from './extra/AnimatedSection';
import Loading from '../Test/Loading';
import { usePortfolio } from 'PortfolioContext';
import { useHeaderHeight, useSections } from 'PortfolioHooks';
import {
  PageBackground,
  LeftSideMiddle,
  MainBackground,
  RightSideMiddle,
} from 'components/Test/PageBackground';
import { Logo } from './Header/SiteIcon';

const Portfolio = () => {
  const [project, setProject] = useState(null);

  const sections = useSections();

  const { loading } = usePortfolio();

  const headerHeight = useHeaderHeight();

  return (
    <Stack direction={'column'} className="gap-[20vh] ">
      {loading && <Loading size={18} />}
      {/* <MainBackground /> */}
      <Stack
        direction="column"
        sx={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
        className="relative"
      >
        <PageBackground sx={{ top: '-10px' }} />
        <Header />

        <div className="flex items-center justify-center relative">
          <About />
        </div>
      </Stack>

      <TextSide />

      <Timeline />

      {/* <Projects /> */}

      <Footer />
    </Stack>
  );
};

export default Portfolio;
