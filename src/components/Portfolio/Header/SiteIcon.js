import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import MediaWithLoadEvent from '../../Test/MediaWithLoadEvent';

const Logo = ({ height = 64, url = '/Hacker.svg' }) => {
  return (
    <MediaWithLoadEvent id="logo">
      <Box
        component="img"
        src={url}
        alt="Logo"
        sx={{
          width: height, // Customize as needed
          height,
          display: 'block',
          margin: 'auto', // Center it if needed
        }}
      />
    </MediaWithLoadEvent>
  );
};

const InlineLogo = ({ height = '1.1em', mx = 0.5, url = '/Hacker.svg' }) => {
  return (
    <Box
      component="img"
      src={url}
      alt="Logo"
      sx={{
        height,
        width: 'auto',
        display: 'inline-block',
        verticalAlign: 'text-bottom',
        mx,
      }}
    />
  );
};

export { Logo, InlineLogo };
