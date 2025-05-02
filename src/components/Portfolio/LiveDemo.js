import { Box, CircularProgress } from "@mui/material";
import { forwardRef, useState } from "react";

const LiveDemo = forwardRef(({ parentSX, project }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Box
    ref={ref}
      sx={parentSX}
      className="flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: isLoaded ? 1 : 0 }} // Smooth fade-in effect
    >
      {/* Loader animation when the iframe is loading */}
      {!isLoaded && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
  
        {/* iframe with onLoad event to trigger loader removal */}
        <iframe
          
          src={project.demo} // ✅ Real live demo hosted by Vercel
          style={{
            width: "70%",
            height: "auto",
            border: "none",
            opacity: isLoaded ? 1 : 0, // Fade-in effect for iframe
            transition: "opacity 1s", // Smooth transition for opacity

            transformOrigin: "top left", // Keeps the content scaling from the top-left corner
            aspectRatio: "16/9",
          }}
          title="Live Demo"
          onLoad={handleIframeLoad} // Trigger the load event
        />
      </Box>

  );
});

export default LiveDemo;
