import { IconButton } from '@mui/material'

const Social = ({ type, social, url}) => {
  <IconButton
    color="inherit"
    onClick={() => window.open(url, "_blank")}
  >
    <GitHub sx={{ color: "#333" }} />
  </IconButton>;
};

export default Social
