import { VolumeUp, VolumeOff } from '@mui/icons-material';

const MuteButton = ({ show = false, isMuted = false, onClick = () => {} }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '5px',
        cursor: 'pointer',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transition: 'all 1s ease',
      }}
      onClick={onClick}
    >
      {isMuted ? (
        <VolumeOff sx={{ color: 'white' }} />
      ) : (
        <VolumeUp sx={{ color: 'white' }} />
      )}
    </div>
  );
};

export default MuteButton;
