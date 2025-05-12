// BotIcon.jsx
import Icon from '../Icon.tsx';
import { BotPaths, ViewBox } from './BotPaths';

const BotIcon = (props) => {
  return (
    <Icon {...props} viewBox={ViewBox}>
      {BotPaths}
    </Icon>
  );
};

export default BotIcon;
