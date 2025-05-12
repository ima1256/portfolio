import { Box, Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import {
  useFuturisticTypography,
  useMainBackground,
  useMainColor,
  useMyJourney,
} from 'PortfolioHooks';

import { PageBackground } from 'components/Test/PageBackground';

const Timeline = forwardRef(({ sx }, ref) => {
  const background = useMainBackground('-51deg');

  const color = useMainColor('-51deg');

  const typography = useFuturisticTypography();

  const myJourney = useMyJourney();

  return (
    <Box
      ref={ref}
      sx={[{}, sx]}
      className="flex items-center justify-center relative"
    >
      <PageBackground />
      <Stack direction="column" spacing={5}>
        <Typography
          variant="h3"
          sx={[
            {
              textAlign: 'center',
              fontWeight: 'bold',
            },
            color,
            typography,
          ]}
        >
          MY YOURNEY
        </Typography>

        <Box position="relative" className="w-full">
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'text.primary',
            }}
          />

          {/* Events */}
          {myJourney?.events.map((event, index) => (
            <Box
              key={index}
              sx={{
                zIndex: 2,
                position: 'relative',
                marginBottom: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Tick Mark (Circle) */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: background,
                  border: '3px solid white',
                }}
              />
              <Box
                sx={{
                  marginLeft: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
                className="mt-6"
              >
                {/* Event Date and Image */}
                <Stack
                  direction={'column'}
                  spacing={1}
                  sx={{ marginRight: '2rem', alignItems: 'center' }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {event.date}
                  </Typography>
                  <img
                    src={`/resources/logos/${event.image}`}
                    alt={event.title}
                    style={{
                      height: 'auto',
                      width: '60px',
                      objectFit: 'cover',
                      // borderRadius: '50%',
                    }}
                  />
                </Stack>

                {/* Event Title and Description */}
                <Stack spacing={1} direction="column">
                  <Typography
                    className="bg-white"
                    variant="h6"
                    sx={{
                      display: 'inline', // Make the Typography element inline to fit tightly around the text
                      lineHeight: 1.2, // Set lineHeight to 1 to remove extra space around the text
                      padding: 0, // Ensure no padding around the text
                      margin: 0, // Ensure no margin around the text
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'primary.main',
                    }}
                  >
                    {event.name}
                  </Typography>
                  <Typography
                    className="bg-white"
                    sx={{
                      display: 'inline', // Make the Typography element inline to fit tightly around the text
                      lineHeight: 1.4, // Set lineHeight to 1 to remove extra space around the text
                      padding: 0, // Ensure no padding around the text
                      margin: 0, // Ensure no margin around the text
                      fontWeight: 'bold',
                      color: 'text.secondary',
                    }}
                    variant="body2"
                  >
                    {event.description}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
});

export default Timeline;
