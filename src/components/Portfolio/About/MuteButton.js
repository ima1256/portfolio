import { VolumeUp, VolumeOff } from '@mui/icons-material';

const MuteButton = ({
  show = false,
  isMuted = false,
  onClick = () => {},
  scale = 1, // base scale (1 = default size)
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${0.5 * scale}em`,
        right: `${0.5 * scale}em`,
        width: `${1.8 * scale}em`,
        aspectRatio: '1 / 1',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        cursor: 'pointer',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transition: 'all 1s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${1 * scale}em`, // base for icon sizing
        paddingTop: `${0.1 * scale}em`,
      }}
      onClick={onClick}
    >
      {isMuted ? (
        <VolumeOff style={{ color: 'white' }} />
      ) : (
        <VolumeUp style={{ color: 'white' }} />
      )}
    </div>
  );
};

export default MuteButton;
