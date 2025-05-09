import React, { createContext, useContext, useState, useEffect } from 'react';
import { eventBus } from 'eventBus';

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

  useEffect(() => {
    let isDataLoaded = false;
    let isMediaLoaded = false;

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

    const handler = (data) => {
      isMediaLoaded = true;
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
