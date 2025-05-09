import { useLogo } from 'PortfolioHooks';
import MediaWithLoadEvent from '../../Test/MediaWithLoadEvent';
import { SiteIcon, Logo } from './SiteIcon';

import { Stack, Typography } from '@mui/material';
import { usePortfolio } from 'PortfolioContext';

const HeaderBrand = () => {
  const portfolioData = usePortfolio();

  const logo = useLogo();

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      className="cursor-pointer"
    >
      <Logo url={logo} />

      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: 'text.secondary',
        }}
      >
        Imanol Conde
      </Typography>
    </Stack>
  );
};

export default HeaderBrand;
