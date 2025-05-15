import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { useFuturisticTypography, useMainColor } from 'PortfolioHooks';

const MainTitle = ({ sx, text = 'Building The Future!' }) => {
  const theme = useTheme();

  const color = useMainColor();
  const typography = useFuturisticTypography();

  return (
    <Typography
      variant="h3" // Use h3 for a larger, more prominent title
      sx={[
        {
          overflow: 'visible',
          paddingX: 1,
          cursor: 'pointer',
          fontWeight: 'bold',
          textAlign: 'center', // Center the text
          letterSpacing: 1.5, // Slight letter spacing for a clean look
          textTransform: 'uppercase', // Uppercase for a more dynamic feel
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
          lineHeight: 1, // Tighten the line height for more compact text
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow for depth
          transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
          '&:hover': {
            color: 'secondary.main', // Change color on hover
            transform: 'scale(1.05)', // Slightly scale up on hover for a dynamic effect
          },
        },
        color,
        typography,
        sx, // Allow additional customizations via props
      ]}
    >
      {text}
    </Typography>
  );
};

export default MainTitle;
