import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';

const MainTitle = ({ sx }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h3" // Use h3 for a larger, more prominent title
      sx={[
        {
          paddingX: '10px',
          fontFamily: 'Siegra',
          cursor: 'pointer',
          fontWeight: 'bold',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', // Primary theme color
          textAlign: 'center', // Center the text
          letterSpacing: 1.5, // Slight letter spacing for a clean look
          textTransform: 'uppercase', // Uppercase for a more dynamic feel
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
          lineHeight: 1, // Tighten the line height for more compact text
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow for depth
          transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
          '&:hover': {
            color: 'secondary.main', // Change color on hover
            transform: 'scale(1.05)', // Slightly scale up on hover for a dynamic effect
          },
        },
        sx, // Allow additional customizations via props
      ]}
    >
      Building the future!
    </Typography>
  );
};

export default MainTitle;
