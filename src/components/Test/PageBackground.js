import { Box } from '@mui/material';

const LeftSide = ({ sx }) => {
  return (
    <Box
      sx={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '75%',
          zIndex: -1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
          boxSizing: 'border-box',
          gridAutoRows: '90px',
          pointerEvents: 'none',
          opacity: 1,

          // ✅ Fade out in both X and Y axes
          WebkitMaskImage: `
            linear-gradient(to right, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,

          WebkitMaskComposite: 'destination-in',

          maskImage: `
            linear-gradient(to right, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,

          maskComposite: 'intersect', // for Firefox

          // Helps some browsers apply masking correctly
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        },
        sx,
      ]}
    >
      {Array.from({ length: 200 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            border: '1px dotted grey',
            opacity: 0.2,
            boxSizing: 'border-box',
          }}
        />
      ))}
    </Box>
  );
};

const AnotherSide = ({ sx }) => {
  return (
    <Box
      sx={[
        {
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '70%',
          zIndex: -1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
          gridAutoRows: '90px',
          pointerEvents: 'none',
          boxSizing: 'border-box',
          overflow: 'hidden',
          opacity: 1,

          // ✅ Fade out in both X and Y axes
          WebkitMaskImage: `
            linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 40%, black 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,

          WebkitMaskComposite: 'destination-in',

          maskImage: `
            linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 40%, black 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,

          maskComposite: 'intersect', // for Firefox

          // Helps some browsers apply masking correctly
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        },
        sx,
      ]}
    >
      {Array.from({ length: 200 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            border: '1px dotted grey',
            opacity: 0.2,
            boxSizing: 'border-box',
          }}
        />
      ))}
    </Box>
  );
};

const RightSide = ({ sx }) => {
  return (
    <Box
      sx={[
        {
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '75%',
          zIndex: -1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
          gridAutoRows: '90px',
          pointerEvents: 'none',
          boxSizing: 'border-box',
          overflow: 'hidden',
          opacity: 1,

          // ✅ Fade out in both X and Y axes
          WebkitMaskImage: `
            linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,

          WebkitMaskComposite: 'destination-in',

          maskImage: `
            linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,

          maskComposite: 'intersect', // for Firefox

          // Helps some browsers apply masking correctly
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        },
        sx,
      ]}
    >
      {Array.from({ length: 200 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            border: '1px dotted grey',
            opacity: 0.2,
            boxSizing: 'border-box',
          }}
        />
      ))}
    </Box>
  );
};

const MainBackground = ({ sx }) => {
  return (
    <>
      <LeftSide />
      <RightSide />
    </>
  );
};

const PageBackground = ({ sx }) => {
  return (
    <>
      <MainBackground />
      {/* <LeftSide sx={sx} />
      <RightSide sx={sx} /> */}
    </>
  );
};

export { PageBackground };
