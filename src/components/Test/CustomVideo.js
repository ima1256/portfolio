import { CardMedia } from "@mui/material";

const CustomVideo = () => {
  return (
    <>
      <CardMedia
        component="video"
        src="https://example.com/video.mp4"
        controls
        autoPlay
        sx={{ height: 300, objectFit: "cover" }}
      />
    </>
  );
};

export default CustomVideo
