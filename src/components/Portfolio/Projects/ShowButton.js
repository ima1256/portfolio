import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import Loading from 'components/Test/Loading';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { eventBus } from 'eventBus';

const ShowButton = ({ project }) => {
  const [isLoading, setIsLoading] = useState(false);

  const buttonRef = useRef(null);

  if (isLoading)
    return (
      <div className="py-[14.75px]">
        <Loading position="" size={15} />
      </div>
    );

  return (
    <>
      <Button
        className="z-30"
        ref={buttonRef}
        onClick={() => {
          buttonRef.current.style.animation = 'pressEffect 0.5s ease';
          setTimeout(() => {
            buttonRef.current.style.animation = '';
            setIsLoading(true);
            eventBus.emit('loadProject', project);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          }, 500);
        }}
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
            boxShadow: `0 12px 20px ${theme.palette.secondary.main}AA`,
          },
        })}
      >
        🚀 View Live Demo
      </Button>
      <IconButton
        color="inherit"
        onClick={() => window.open(project.github, '_blank')}
      >
        <GitHub sx={{ color: '#333' }} />
      </IconButton>
    </>
  );
};

export default ShowButton;
