import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Fetch data from public/portfolio.json
    fetch('/portfolio.json')
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error('Error loading portfolio data:', error));
  }, []);

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};
