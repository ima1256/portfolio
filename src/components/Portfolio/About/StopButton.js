import { useTheme } from '@emotion/react';
import StopIcon from '@mui/icons-material/Stop';
import { Button } from '@mui/material';

const StopButton = ({ disabled = false, onClick = () => {} }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      startIcon={<StopIcon />}
      sx={(theme) => ({
        px: 4,
        py: 1.5,
        borderRadius: '12px',
        fontWeight: 'bold',
        textTransform: 'none',
        boxShadow: !disabled ? 'none' : 3,
        background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.tertiary.main})`,
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        transition:
          'transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
          background: `linear-gradient(135deg, ${theme.palette.secondary.dark}, ${theme.palette.tertiary.dark})`,
        },
        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',
          background: `linear-gradient(135deg, ${theme.palette.grey[400]}, ${theme.palette.grey[500]})`,
        },
      })}
    >
      Stop
    </Button>
  );
};

export default StopButton;
