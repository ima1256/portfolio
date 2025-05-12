import { Button, Dialog, DialogContent, Box } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useMainBackground } from 'PortfolioHooks';

const BookCallButton = ({ onClick }) => {
  const background = useMainBackground();

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={[
        {
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 'bold',
          px: 3,
          py: 1.2,
          whiteSpace: 'nowrap',
        },
        background,
      ]}
    >
      Book a Call
    </Button>
  );
};

export default BookCallButton;
