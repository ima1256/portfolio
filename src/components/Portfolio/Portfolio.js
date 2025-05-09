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
import { useSelector } from 'react-redux';
import { AnimatedSection, AnimatedMain } from './extra/AnimatedSection';
import Loading from '../Test/Loading';
import { eventBus } from '../../eventBus';

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const liveCodingRef = useRef(null);
  const contactRef = useRef(null);
  const liveDemoRef = useRef(null);

  const [project, setProject] = useState(null);

  const sections = [
    { name: 'About' },
    { name: 'Timeline' },
    { name: 'Projects' },
    { name: 'Skills' },
    { name: 'Live Coding' },
    { name: 'Contact' },
    { name: 'Footer' },
  ];

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

  return (
    <Stack className="gap-[30vh]">
      {/* {loading && <Loading size={18} />} */}
      <Stack
        direction="column"
        sx={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
        className="h-screen overflow-hidden"
      >
        <Header
          className="h-[64px]"
          sections={sections}
          onTabChange={handleTabChange}
        />

        {/* <div className="h-[64px] z-10 bg-red-500"></div> */}

        {/* <AnimatedMain className="flex-grow">
          <div className="h-full bg-green-500"></div>
        </AnimatedMain> */}

        {/* <AnimatedMain className="flex-grow"> */}
        <About
          className="h-full items-center justify-center flex-grow"
          ref={aboutRef}
        />
      </Stack>

      <AnimatedSection>
        <TextSide sx={{ minHeight: defaultSectionHeight }} />
      </AnimatedSection>

      {/* <Timeline sx={{ minHeight: defaultSectionHeight }} /> */}
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
