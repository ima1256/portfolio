import { forwardRef, useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectProjects } from '../../features/data/selectors';
// import { useSelector } from 'react-redux';
import VideoWithControls from './About/VideoWithControls';
import { useTheme } from '@emotion/react';
import { usePortfolio } from 'PortfolioContext';

const Projects = forwardRef(({ sx, onProjectChange }, ref) => {
  const theme = useTheme();

  const [projectId, setProjectId] = useState(0);

  const portfolioData = usePortfolio();

  const projectList = portfolioData?.projects || [];

  // Ensure handleChange is after the projectList is fetched
  const handleChange = (project) => {
    setProjectId(project.id);
    onProjectChange(projectList.find((p) => p.id === project.id)); // Use strict equality
  };

  return (
    <Box sx={sx} ref={ref} className="flex items-center justify-center">
      <Stack direction="row" spacing={3}>
        {projectList.map((project, index) => {
          return (
            <Card key={project.id} sx={{ maxWidth: 345 }}>
              {/* <CardMedia sx={{ height: 200 }} image={project.thumbnail} /> */}
              <Box sx={{ position: 'relative' }}>
                <VideoWithControls
                  videoUrl={project.video}
                  borderRadius="8px"
                />
              </Box>
              <CardContent
                sx={(theme) => ({
                  padding: 4,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '12px',
                  //boxShadow: `0 4px 10px ${theme.palette.primary.main}22`, // light tinted shadow
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                })}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    //color: theme.palette.tertiary.main, // your vivid orange
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    letterSpacing: 1.5, // Slightly more spacing between letters for better readability
                    //textTransform: 'uppercase', // Uppercase text for a more impactful look
                    //fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' }, // Responsive font size for mobile-first design
                    //lineHeight: 1.3, // Slightly tighter line height for cleaner text
                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // Adding subtle shadow to make it pop
                    transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effects
                    '&:hover': {
                      color: theme.palette.secondary.main, // Hover effect with secondary color
                      transform: 'scale(1.05)', // Slight scale on hover for a dynamic feel
                    },
                  }}
                >
                  {project.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: 'flex',
                  paddingTop: 0,
                  paddingBottom: 3,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                {/* <KeyboardArrowDownIcon />
                <Button size="small" onClick={() => handleChange(project)}>
                  Show
                </Button>
                <KeyboardArrowDownIcon /> */}

                <Button
                  onClick={() => handleChange(project)}
                  sx={(theme) => ({
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: theme.palette.getContrastText(
                      theme.palette.primary.main
                    ),
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    boxShadow: `0 8px 16px ${theme.palette.secondary.main}66`, // semi-transparent shadow
                    transform: 'perspective(1px) translateZ(0)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 12px 20px ${theme.palette.secondary.main}AA`,
                    },
                  })}
                >
                  🚀 View Live Demo
                </Button>

                {/* <Button size="small" onClick={() => handleChange(project)}>Go to project site</Button> */}
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
});

export default Projects;
