import { useTheme } from '@emotion/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';

const PlayButton = ({ disabled = false, onClick = () => {} }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      startIcon={<PlayArrowIcon />}
      sx={(theme) => ({
        px: 4,
        py: 1.5,
        borderRadius: '12px',
        fontWeight: 'bold',
        textTransform: 'none',
        boxShadow: disabled ? 'none' : 3,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        transition:
          'transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
        },
        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',
          background: `linear-gradient(135deg, ${theme.palette.grey[400]}, ${theme.palette.grey[500]})`,
        },
      })}
    >
      Play
    </Button>
  );
};

export default PlayButton;
