import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const Home = () => {


  const navigate = useNavigate();

  const buttonText = (text) => {
    return text.toUpperCase()
  }

  return (
    <Stack>
      <Button variant="contained" onClick={() => navigate("/portfolio")}>
        {buttonText('Portfolio')}
      </Button>
      <Button variant="contained" onClick={() => navigate("/test")}>
        {buttonText('Test')}
      </Button>
    </Stack>
  );
};

export default Home;
