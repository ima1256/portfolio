import { useEffect, useRef, isValidElement } from 'react';
import React from 'react';
import { eventBus } from '../../eventBus';

const MediaWithLoadEvent = ({ id, children }) => {
  const startRef = useRef(null);

  useEffect(() => {
    startRef.current = performance.now();
  }, []);

  if (!isValidElement(children)) {
    console.warn('MediaWithLoadEvent expects a valid React element.');
    return null;
  }

  const componentType = children.props.component || children.type;

  const handleLoaded = () => {
    const loadTime = performance.now() - startRef.current;
    eventBus.emit('mediaLoaded', { id, loadTimeMs: loadTime });
    console.log(`[${id}] loaded in ${loadTime.toFixed(2)} ms`);
  };

  const propsToInject = {};
  if (componentType === 'img') {
    propsToInject.onLoad = handleLoaded;
  } else if (componentType === 'video') {
    propsToInject.onLoadedData = handleLoaded;
  } else {
    console.warn(
      "MediaWithLoadEvent only supports elements with component='img' or 'video'."
    );
  }

  return React.cloneElement(children, propsToInject);
};

export default MediaWithLoadEvent;
