import { Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Facebook } from '@mui/icons-material';
import { Logo } from '../Header/SiteIcon';
import { useSocials } from 'PortfolioHooks';

const Socials = ({ fontSize = '24px', sx = {}, className = '' }) => {
  const socialLinks = useSocials();

  return (
    <Stack
      sx={(theme) => ({ ...(typeof sx === 'function' ? sx(theme) : sx) })}
      className={className}
      direction="row"
    >
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
    </Stack>
  );
};

export default Socials;
