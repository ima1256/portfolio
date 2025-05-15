import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import {
  useJobApplications,
  useJobApplicationsArray,
  useJobApplicationsIds,
} from 'PortfolioHooks';

const Home = () => {
  const navigate = useNavigate();

  const buttonText = (text) => {
    return text.toUpperCase();
  };

  const jobs = useJobApplicationsArray();

  return (
    <Stack>
      <Button variant="contained" onClick={() => navigate('/portfolio')}>
        {buttonText('Portfolio')}
      </Button>
      <Button variant="contained" onClick={() => navigate('/test')}>
        {buttonText('Test')}
      </Button>
      {jobs?.map((job) => {
        return (
          <Button variant="contained" onClick={() => navigate('/' + job.id)}>
            {buttonText(job.company)}
          </Button>
        );
      })}
    </Stack>
  );
};

export default Home;
