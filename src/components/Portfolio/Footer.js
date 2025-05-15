import { Box, Typography, Container, Link, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Socials from './About/Socials';
import { useInfo, useMainColor } from 'PortfolioHooks';

const Footer = () => {
  const theme = useTheme();

  const info = useInfo();

  const color = useMainColor();

  return (
    <Box
      sx={{
        backgroundColor: '#111',
        color: '#fff',
        py: 1,
        px: 5,
        width: '100%',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={'center'}
        spacing={2}
      >
        {/* Left Side */}
        <Box>
          <Typography
            variant="h6"
            sx={[
              {
                fontFamily: theme.typography.fontFamily,
                fontWeight: 'bold',
                //                 background: color,
                // WebkitBackgroundClip: 'text',
                // WebkitTextFillColor: 'transparent', // Primary theme color
              },
              color,
            ]}
          >
            {info?.name}
          </Typography>
        </Box>

        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} | All rights reserved.
        </Typography>

        {/* Right Side - Links */}

        <Stack direction="row" spacing={3} className="items-center">
          <Socials />
          {/* <Link
              href="mailto:your.email@example.com"
              underline="hover"
              sx={{ color: theme.palette.secondary.main }}
            >
              Email
            </Link> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
