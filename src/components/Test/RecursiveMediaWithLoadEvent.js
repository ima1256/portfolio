import {
  useEffect,
  useRef,
  useState,
  isValidElement,
  cloneElement,
  Children,
} from 'react';
import React from 'react';
import { eventBus } from '../../eventBus';

const isMediaTag = (type) => type === 'img' || type === 'video';

const MediaWithLoadEvent = ({ id, children }) => {
  const startRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const mediaCountRef = useRef(0);

  useEffect(() => {
    startRef.current = performance.now();
  }, []);

  const handleSingleMediaLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (mediaCountRef.current > 0 && loadedCount === mediaCountRef.current) {
      const loadTime = performance.now() - startRef.current;
      eventBus.emit('mediaLoaded', { id, loadTimeMs: loadTime });
      console.log(`[${id}] all media loaded in ${loadTime.toFixed(2)} ms`);
    }
  }, [loadedCount, id]);

  const processChildren = (child) => {
    if (!isValidElement(child)) return child;

    const type = typeof child.type === 'string' ? child.type : null;
    const props = {};

    if (isMediaTag(type)) {
      mediaCountRef.current += 1;

      if (type === 'img') {
        props.onLoad = handleSingleMediaLoad;
      } else if (type === 'video') {
        props.onLoadedData = handleSingleMediaLoad;
      }
    }

    if (child.props.children) {
      props.children = Children.map(child.props.children, processChildren);
    }

    return cloneElement(child, props);
  };

  const wrappedChildren = Children.map(children, processChildren);

  return <>{wrappedChildren}</>;
};

export default MediaWithLoadEvent;
