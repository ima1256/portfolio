// BotIcon.jsx
import Icon from '../Icon.tsx';
import { FullStack, ViewBox } from '../Paths/FullStack.jsx';

const BotIcon = (props) => {
  return (
    <Icon {...props} viewBox={ViewBox}>
      {FullStack}
    </Icon>
  );
};

export default BotIcon;
