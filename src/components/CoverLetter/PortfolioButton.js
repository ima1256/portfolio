import { Button } from '@mui/material';

const PortfolioButton = ({ sx = {} }) => {
  const portfolioUrl = 'https://portfolio1256.netlify.app';

  return (
    <Button
      onClick={() => window.open(portfolioUrl, '_blank')}
      sx={(theme) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        fontFamily: 'Comic Relief',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '12px',
        boxShadow: `0 8px 16px ${theme.palette.secondary.main}66`, // semi-transparent shadow
        transform: 'perspective(1px) translateZ(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',

        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
          //background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
        },
        ...(typeof sx === 'function' ? sx(theme) : sx),
      })}
    >
      🚀 Portfolio
    </Button>
  );
};

export default PortfolioButton;
