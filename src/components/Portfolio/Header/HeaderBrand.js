import { useHeaderHeight, useLogo } from 'PortfolioHooks';
import MediaWithLoadEvent from '../../Test/MediaWithLoadEvent';
import { SiteIcon, Logo } from './SiteIcon';

import { Stack, Typography } from '@mui/material';
import { usePortfolio } from 'PortfolioContext';
import { useFuturisticTypography, useMainColor } from 'PortfolioHooks';

const HeaderBrand = () => {
  const portfolioData = usePortfolio();

  const logo = useLogo();

  const color = useMainColor();
  const typography = useFuturisticTypography();

  const height = useHeaderHeight();

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      className="cursor-pointer"
    >
      <Logo height={'12vh'} url={logo} />

      <Typography
        variant="h5"
        sx={[
          {
            fontWeight: 'bold',
            display: {
              xs: 'none',
              sm: 'flex',
            },
          },
          color,
          typography,
        ]}
      >
        ima1256
      </Typography>
    </Stack>
  );
};

export default HeaderBrand;
