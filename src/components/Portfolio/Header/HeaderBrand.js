import MediaWithLoadEvent from '../../Test/MediaWithLoadEvent';
import { SiteIcon, Hacker } from './SiteIcon';

import { Stack, Typography } from '@mui/material';

const HeaderBrand = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      className="cursor-pointer"
    >
      <MediaWithLoadEvent>
        <Hacker />
      </MediaWithLoadEvent>
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
