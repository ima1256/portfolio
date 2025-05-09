import { useContext } from 'react';
import { PortfolioContext } from 'PortfolioContext';

export const usePortfolioData = () =>
  useContext(PortfolioContext).portfolioData;
export const usePortfolioLoading = () => useContext(PortfolioContext).loading;

export const useProjects = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.projects ?? []; // Returns an empty array if undefined
};

export const useSections = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.page?.sections ?? []; // Returns an empty array if undefined
};

export const useLogo = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.page?.logo?.url ?? null; // Returns an empty array if undefined
};

export const useShowAnimations = () => {
  return true;
};
