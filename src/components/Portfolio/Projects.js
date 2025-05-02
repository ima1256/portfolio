import { forwardRef, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { selectProjects } from "../../features/data/selectors";
import { useSelector } from "react-redux";
import VideoWithControls from "./About/VideoWithControls";
import { useTheme } from "@emotion/react";

const Projects = forwardRef(({ sx, onProjectChange }, ref) => {

  const theme = useTheme()

  const [projectId, setProjectId] = useState(0);

  const projectList = useSelector((state) => state.data.json?.projects);
  // const primeVideo = useSelector((state) => state.data.json.primeVideo.url)
  const loading = useSelector((state) => state.data.loading);

  // Ensure handleChange is after the projectList is fetched
  const handleChange = (project) => {
    setProjectId(project.id);
    onProjectChange(projectList.find((p) => p.id === project.id)); // Use strict equality
  };

  if (loading) return <Typography>Loading...</Typography>; // Show a loading message or spinner
  if (!projectList) return <Typography>No projects available</Typography>;

  return (
    <Box sx={sx} ref={ref} className="flex items-center justify-center">
      <Stack direction="row" spacing={3}>
        {projectList.map((project, index) => {
          return (
            <Card key={project.id} sx={{ maxWidth: 345 }}>
              {/* <CardMedia sx={{ height: 200 }} image={project.thumbnail} /> */}
              <Box sx={{ position: "relative" }}>
                {/* Embed Wistia Video */}
                {/* <iframe
                  width="100%"
                  height="100%"
                  src={project.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  control
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                ></iframe> */}
                <VideoWithControls videoUrl={project.video} borderRadius="8px" />
              </Box>
              <CardContent>
              {/* sx={{color: theme.palette.tertiary.main, fontWeight: "bold"}} */}
                <Typography  gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "space-around" }} >
   
                  <KeyboardArrowDownIcon />
                  <Button size="small" onClick={() => handleChange(project)}>
                    Show
                  </Button>
                  <KeyboardArrowDownIcon />
        
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
