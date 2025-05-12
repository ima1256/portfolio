import { useTheme } from '@mui/material/styles';
import { gradientMap, GradientMapKeys } from './gradients.tsx';

const GradientDefs = ({
  gradientId = 'main',
}: {
  gradientId?: GradientMapKeys;
}) => {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const Component = gradientMap[gradientId];

  const elem = gradientMap[gradientId]({ id: gradientId, primary, secondary });

  return <defs>{elem}</defs>;
};

export default GradientDefs;
