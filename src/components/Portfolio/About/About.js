import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import { forwardRef, useState, useRef, useEffect } from "react";

import VideoSide from "./VideoSide";

const MainTitle = ({ sx }) => {
  return (
    <Typography
      variant="h4" // Adjusted for a more prominent heading
      sx={[
        {
          fontWeight: "bold",
          color: "primary.main",
          textAlign: "center",
        },
        sx,
      ]}
    >
      1 Line At a Time!
    </Typography>
  );
};

const About = forwardRef(({className=""}, ref) => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  // useEffect(() => {
  //   // Trigger animation after component mounts
  //   if (videoRef.current && textRef.current) {
  //     videoRef.current.classList.add("animate-left");
  //     textRef.current.classList.add("animate-right");
  //   }
  // }, []);

  return (
    <Stack className={`${className}`} direction="column" spacing={3}>
      <Stack
        direction="column" // Responsive direction change
        spacing={3}
        className="items-center justify-center"
      >
        <MainTitle />
        {/* <VideoSide ref={videoRef} /> */}
      </Stack>

      {/* <TextSide ref={textRef} /> */}
    </Stack>
  );
});

export default About;
