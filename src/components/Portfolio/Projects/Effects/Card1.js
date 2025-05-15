import { Card, Stack } from '@mui/material';

const Card1 = ({
  children,
  borderRadius = '1rem',
  boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)',
  sx = {},
}) => {
  const distantiate = '1';

  return (
    <Stack
      sx={{
        borderRadius,
        margin: '0px auto',
        border: 'none',
      }}
      className="group relative"
    >
      <div
        style={{ borderRadius, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        className="group-hover:translate-x-1 group-hover:translate-y-1 z-10 absolute w-full h-full bg-white transition-transform duration-300 ease-out"
      ></div>
      <div
        style={{ borderRadius, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        className="group-hover:-translate-x-1 group-hover:-translate-y-1 relative z-20 transition-transform duration-300 ease-out "
      >
        <Card sx={{ borderRadius, border: 'none', overflow: 'hidden', ...sx }}>
          {children}
        </Card>
      </div>
    </Stack>
  );
};

export default Card1;
