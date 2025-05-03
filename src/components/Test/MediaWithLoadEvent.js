import { useEffect, useRef, isValidElement } from 'react';
import React from 'react';
import { eventBus } from '../../eventBus';
import { Box } from '@mui/material';

const MediaWithLoadEvent = ({ id, children }) => {
  const startRef = useRef(null);
  const hasEmitted = useRef(false);

  useEffect(() => {
    startRef.current = performance.now();
    //console.log(`[${id}] mounted`);
    return () => {
      //console.log(`[${id}] unmounted`);
    };
  }, []);

  if (!isValidElement(children)) {
    console.warn('MediaWithLoadEvent expects a valid React element.');
    return null;
  }

  const componentType = children.props.component || children.type;

  const handleLoaded = () => {
    //console.log(`[${id}] handleLoaded called. Emitted: ${hasEmitted.current}`);
    if (hasEmitted.current) return;
    hasEmitted.current = true;

    const loadTime = performance.now() - startRef.current;
    eventBus.emit('mediaLoaded', { id, loadTimeMs: loadTime });
    //console.log(`[${id}] loaded in ${loadTime.toFixed(2)} ms`);
  };

  // console.log(`${children.props.component}, ${children.type}`);

  const propsToInject = {};
  if (
    componentType === 'img' ||
    (componentType === Box && children.props.component === 'img')
  ) {
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
