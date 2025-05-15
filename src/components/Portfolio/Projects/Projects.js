import { forwardRef, useState, useRef } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectProjects } from '../../../features/data/selectors';
// import { useSelector } from 'react-redux';
import VideoWithControls from '../About/VideoWithControls';
import { useTheme } from '@emotion/react';
import { usePortfolio } from 'PortfolioContext';
import {
  useMainColor,
  useProjects,
  useFuturisticTypography,
} from 'PortfolioHooks';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Project from './Project';
import { Animation } from '../extra/AnimatedSection';

const Projects = ({ sx = {}, onProjectChange = () => {} }) => {
  const projects = useProjects();

  const ref = useRef(null);

  return (
    <Box sx={sx} ref={ref} className="flex items-center justify-center">
      <Stack direction="row" sx={{ paddingX: 2 }} spacing={3}>
        {projects.map((project, index) => {
          return (
            // <Animation key={project.id} name="Bounce" delay={index * 0.7}>
            <Project project={project} />
            // </Animation>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
