import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from 'react';
import { eventBus } from 'eventBus';
import MediaWithLoadEvent from 'components/Test/MediaWithLoadEvent';

export const PortfolioContext = createContext({
  portfolioData: null,
  loading: true,
});

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  const [loading, setLoading] = useState(true);

  // const count = Children.toArray(children).filter(
  //   (child) => child.type === MediaWithLoadEvent
  // ).length;

  const MEDIA_ELEMENT_NUMBER = 1;

  useEffect(() => {
    let isDataLoaded = false;
    let isMediaLoaded = false;
    let mediaNumber = 0;

    const updateLoadingState = () => {
      if (isDataLoaded && isMediaLoaded) {
        setLoading(false);
        eventBus.emit('dataAndMediaLoaded');
      }
    };

    // Fetch data from public/portfolio.json
    fetch('/portfolio.json')
      .then((response) => response.json())
      .then((data) => {
        setPortfolioData(data);
        isDataLoaded = true;
        updateLoadingState();
      })
      .catch((error) => {
        console.error('Error loading portfolio data:', error);
        isDataLoaded = true;
        updateLoadingState();
      });

    const handler = ({ id, loadTimeMs }) => {
      mediaNumber++;
      isMediaLoaded = mediaNumber == MEDIA_ELEMENT_NUMBER ? true : false;
      console.log(`Media with ID ${id} loaded in ${loadTimeMs}ms`);
      updateLoadingState();
    };

    eventBus.on('mediaLoaded', handler);

    return () => {
      eventBus.off('mediaLoaded', handler); // Clean up
    };
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};
