import { useEffect, useRef, isValidElement } from 'react';
import React from 'react';
import { eventBus } from '../../eventBus';
import { Box } from '@mui/material';

const MediaWithLoadEvent = ({ id, children }) => {
  const startRef = useRef(null);
  const hasEmitted = useRef(false);
  const innerId = useRef(null);

  useEffect(() => {
    startRef.current = performance.now();
    innerId.current = id + '-' + crypto.randomUUID();
    return () => {};
  }, []);

  if (!isValidElement(children)) {
    console.warn('MediaWithLoadEvent expects a valid React element.');
    return null;
  }

  const componentType = children.props.component || children.type;

  const handleLoaded = () => {
    if (hasEmitted.current) return;
    hasEmitted.current = true;

    const loadTime = performance.now() - startRef.current;
    eventBus.emit('mediaLoaded', { id: innerId.current, loadTimeMs: loadTime });
  };

  const propsToInject = {};
  if (
    componentType === 'img' ||
    (componentType === Box && children.props.component === 'img')
  ) {
    propsToInject.onLoad = handleLoaded;
  } else if (componentType === 'video') {
    propsToInject.onLoadedData = handleLoaded;
  } else if (componentType === 'iframe') {
    propsToInject.onLoad = handleLoaded;
  } else {
    console.warn(
      "MediaWithLoadEvent only supports elements with component='img', 'video', or 'iframe'."
    );
  }

  return React.cloneElement(children, propsToInject);
};

export default MediaWithLoadEvent;
