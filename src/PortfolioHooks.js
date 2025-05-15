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
  return (
    portfolioData?.page?.sections?.filter((section) => section.active) ?? []
  ); // Returns an empty array if undefined
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
  return portfolioData?.page?.logo?.url ?? ''; // Returns an empty array if undefined
};

export const useMainVideo = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.page?.main.video?.url ?? ''; // Returns an empty array if undefined
};

export const usePlaceholder = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.placeholder ?? {};
};

export const useShowAnimations = () => {
  return true;
};

export const useJobApplications = () => {
  const portfolioData = usePortfolioData();
  return portfolioData?.jobApplications ?? {}; // Returns an empty array if undefined
};

export const useJobApplicationsIds = () => {
  const jobApplications = useJobApplications();
  return Object.keys(jobApplications);
};

export const useJobApplication = (id) => {
  const portfolioData = usePortfolioData();

  return { id: id, ...portfolioData?.jobApplications?.[id] } ?? {}; // Returns an empty array if undefined
};

export const useJobApplicationsArray = () => {
  const jobApplications = useJobApplications();

  const jobArray = Object.entries(jobApplications).map(([id, data]) => ({
    id, // 🆔 the original key
    ...data, // 📦 spread the original job application data
  }));

  return jobArray;
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

export const cardMetaData = () => {
  return { borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' };
};

export const useFuturisticTypography = () => {
  return {
    fontFamily: 'Siegra',
  };
};

export const useHeaderHeight = () => {
  return '15vh';
};
