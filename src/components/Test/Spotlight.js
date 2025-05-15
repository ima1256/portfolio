import { useState, useEffect } from 'react';
import { eventBus } from 'eventBus';
import { Animation } from 'components/Portfolio/extra/AnimatedSection';

const Spotlight = ({ children }) => {
  const [active, setActive] = useState(false);

  const [name, setName] = useState('Fade In Only');

  const duration = 0.3;

  const deactivate = () => {
    setName('Fade Out Only');
    setTimeout(() => {
      setActive(false);
      eventBus.emit('escSpotlight');
      setName('Fade In Only');
    }, 1000 * duration);
  };

  useEffect(() => {
    const handleEventBus = () => {
      setActive(true);
    };

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        deactivate();
      }
    };

    eventBus.on('setSpotlight', handleEventBus);

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
      eventBus.off('setSpotlight', handleEventBus);
    };
  }, []);

  if (!active) return children;

  return (
    <Animation
      onClick={() => deactivate()}
      name={name}
      duration={duration}
      className="absolute w-full h-full z-50 bg-black bg-opacity-70"
    />
  );
};

export default Spotlight;
