import { Button, Stack } from '@mui/material';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects';
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
import { PageBackground } from 'components/Test/PageBackground';
import { Logo } from './Header/SiteIcon';

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const liveCodingRef = useRef(null);
  const contactRef = useRef(null);
  const liveDemoRef = useRef(null);

  const [project, setProject] = useState(null);

  const sections = useSections();

  const { loading } = usePortfolio();

  const handleTabChange = (sectionName) => {
    if (sectionName === 'About') {
      //aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === 'Projects') {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Skills') {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Live Coding') {
      liveCodingRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectChange = (project) => {
    setProject(project);
    liveDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    // alert(project.name)
  };

  const defaultSectionHeight = '100vh';

  const headerHeight = useHeaderHeight();

  return (
    <Stack className="gap-[10vh]">
      {loading && <Loading size={18} />}
      <Stack
        direction="column"
        sx={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
        className="relative"
      >
        <PageBackground sx={{ top: '-10px' }} />
        <Header onTabChange={handleTabChange} />

        <div className="flex items-center justify-center relative">
          <About ref={aboutRef} />
        </div>
      </Stack>

      <AnimatedSection>
        <Stack direction="row">
          <TextSide />
        </Stack>
      </AnimatedSection>

      <Timeline sx={{ minHeight: defaultSectionHeight }} />
      <AnimatedSection>
        <Projects
          sx={{ minHeight: defaultSectionHeight }}
          onProjectChange={handleProjectChange}
          ref={projectsRef}
        />
      </AnimatedSection>
      <LiveDemo
        parentSX={{
          minHeight: defaultSectionHeight,
          height: defaultSectionHeight,
        }}
        project={project}
        ref={liveDemoRef}
      />

      {/* <LiveCoding sx={{}} ref={liveCodingRef} /> */}
      {/* <Skills ref={skillsRef} /> */}
      {/* <Contact ref={contactRef} /> */}
      <Footer />
    </Stack>
  );
};

export default Portfolio;
