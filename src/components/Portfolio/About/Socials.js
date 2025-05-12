import { Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Facebook } from '@mui/icons-material';
import { Logo } from '../Header/SiteIcon';

const Socials = ({ fontSize = '24px' }) => {
  const socialLinks = {
    github: {
      url: 'https://github.com/ima1256',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/imanolcondegonzalez',
    },
    facebook: {
      url: 'https://www.facebook.com/imanol.conde.37',
    },
  };

  const email = 'imanolcondeimanol@gmail.com';

  return (
    <Stack direction="row">
      <IconButton
        color="inherit"
        onClick={() => window.open(socialLinks.github.url, '_blank')}
      >
        <GitHub sx={{ color: '#333', fontSize }} />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.open(socialLinks.linkedin.url, '_blank')}
      >
        <LinkedIn sx={{ color: '#0077B5', fontSize }} />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.open(socialLinks.facebook.url, '_blank')}
      >
        <Facebook sx={{ color: '#1877F2', fontSize }} />
      </IconButton>

      {/* <IconButton component="a" href={`mailto:${email}`} >
          <Logo height={24} url="/tech/gmail.svg" />
        </IconButton> */}
    </Stack>
  );
};

export default Socials;
