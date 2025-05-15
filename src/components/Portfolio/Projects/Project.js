import { forwardRef, useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectProjects } from '../../../features/data/selectors';
// import { useSelector } from 'react-redux';
import VideoWithControls from '../About/VideoWithControls';
import { useTheme } from '@emotion/react';
import {
  useMainColor,
  useProjects,
  useFuturisticTypography,
} from 'PortfolioHooks';

import ShowButton from './ShowButton';
import Card1 from './Effects/Card1';

const Project = ({ project }) => {
  const theme = useTheme();

  const futuristicTypography = useFuturisticTypography();

  const mainColor = useMainColor();

  const getTruncatedDescription = (project) => {
    const maxChars = 150;
    const isTruncated = project.description.length > maxChars;
    const shortText =
      project.description.slice(0, maxChars) + (isTruncated ? '...' : '');
    return shortText;
  };

  return (
    <Card1 sx={{ maxWidth: '345px' }}>
      <VideoWithControls
        video={project.video}
        thumbnail={project.video ? '' : '/gifs/underConstruction.gif'}
        // borderRadius={`${borderRadius} ${borderRadius} 0 0`}
      />

      <CardContent
        sx={(theme) => ({
          padding: 0,
          paddingTop: 2,
        })}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={[
            {
              fontWeight: 'bold',
              color: theme.palette.text.secondary,
              textAlign: 'center',
              letterSpacing: 1.5, // Slightly more spacing between letters for better readability
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // Adding subtle shadow to make it pop
              transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effects
              cursor: 'pointer',
              lineHeight: 0.7,
            },
            futuristicTypography,
            mainColor,
          ]}
        >
          {project.name}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Comic Relief',
            paddingX: 3,
            paddingY: 2,
            color: theme.palette.text.secondary,
            wordBreak: 'break-word',
            cursor: 'pointer',
          }}
        >
          {getTruncatedDescription(project)}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: 0,
          paddingBottom: 2,
          paddingX: 2,
          position: 'relative',
        }}
      >
        <ShowButton project={project} />
      </CardActions>
    </Card1>
  );
};

export default Project;
