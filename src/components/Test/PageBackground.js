import { Box, Stack } from '@mui/material';

const DashedSquaresOverlay = ({
  sx = {
    width: '50%',
    height: '75%',
  },
  gradient = `
            linear-gradient(to right, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
            linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
          `,
  squares = 80,
  squareHeight = '90px',
  squareWidth = '70px',
}) => {
  return (
    <Box
      sx={[
        {
          position: 'absolute',
          zIndex: -1,
          display: 'grid',
          gridAutoRows: squareHeight,
          gridTemplateColumns: `repeat(auto-fit, minmax(${squareWidth}, 1fr))`,
          boxSizing: 'border-box',
          pointerEvents: 'none',
          opacity: 1,

          WebkitMaskImage: gradient,
          WebkitMaskComposite: 'destination-in',

          maskImage: gradient,
          maskComposite: 'intersect', // for Firefox

          // Helps some browsers apply masking correctly
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        },
        sx,
      ]}
    >
      {Array.from({ length: squares }).map((_, i) => (
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

const LeftSide = ({ sx = {} }) => {
  return (
    <DashedSquaresOverlay
      sx={{
        width: '50%',
        height: '100vh',
        top: 0,
        left: 0,
      }}
      gradient="linear-gradient(to right, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
                linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)"
    />
  );
};

const BottomSide = ({ sx = {} }) => {
  return (
    <DashedSquaresOverlay
      sx={{
        width: '50%',
        height: '100%',
        bottom: 0,
        left: 0,
      }}
      gradient="linear-gradient(to right, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
                linear-gradient(to top, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)"
    />
  );
};

const LeftSideMiddle = ({ sx = {} }) => {
  return (
    <DashedSquaresOverlay
      sx={{
        width: '50%',
        height: '100%',
        top: 0,
        left: 0,
        transform: 'translateY(-40vh)',
      }}
      gradient="linear-gradient(to right, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
                linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)"
    />
  );
};

const RightSideMiddle = ({ sx = {} }) => {
  return (
    <DashedSquaresOverlay
      sx={{
        width: '50%',
        height: '100%',
        top: 0,
        right: 0,
        transform: 'translateY(0)',
      }}
      gradient="linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 30%, black 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)"
    />
  );
};

//another side

// WebkitMaskImage: `
//         linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
//         linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 40%, black 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)
//       `,

//right side
// linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
// linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)

const RightSide = ({ sx }) => {
  return (
    <DashedSquaresOverlay
      sx={{
        width: '50%',
        height: '100vh',
        top: 0,
        right: 0,
      }}
      gradient="linear-gradient(to left, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%),
                linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)"
    />
  );
};

const MainBackground = () => {
  return (
    <Stack
      sx={{
        background: `linear-gradient(
          135deg,
          #ffffff 0%,
          #f2f7ff 25%,
          rgba(194, 0, 255, 0.03) 50%,
          rgba(0, 229, 255, 0.04) 75%,
          #ffffff 100%
        )`,
        zIndex: -1,
      }}
      className="absolute w-full h-full"
    />
  );
};

const PageBackground = ({ sx = {} }) => {
  return (
    <>
      {/* <div className="flex w-fit h-fit border border-red-500"> */}
      {/* <LeftSideMiddle /> */}
      {/* <BottomSide /> */}
      <LeftSide />
      <RightSide />
      {/* </div> */}
    </>
  );
};

export { PageBackground, LeftSideMiddle, RightSideMiddle, MainBackground };
