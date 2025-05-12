import { useContext } from 'react';
import { PortfolioContext } from 'PortfolioContext';
import { useTheme } from '@emotion/react';

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

export const useSkills = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.skills;
};

export const useSocials = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.socials;
};

export const useInfo = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.info;
};

export const useMyJourney = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.myJourney;
};

export const useLogo = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.page?.logo?.url ?? null; // Returns an empty array if undefined
};

export const useShowAnimations = () => {
  return true;
};

export const useMainColorGradient = (direction = '135deg') => {
  const theme = useTheme();
  return `linear-gradient(${direction}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;
};

export const useMainBackground = (direction = '135deg') => {
  const color = useMainColorGradient(direction);

  return {
    background: color,
  };
};

export const useMainColor = (direction = '135deg') => {
  const color = useMainColorGradient(direction);

  return {
    background: color,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', // Primary theme color
  };
};

export const useFuturisticTypography = () => {
  return {
    fontFamily: 'Siegra',
  };
};

export const useHeaderHeight = () => {
  return '15vh';
};
