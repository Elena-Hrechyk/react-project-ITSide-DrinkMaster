import switchToLight from '../../img/svg/switcher1.svg';
import switchToDark from '../../img/svg/switcher2.svg';
import { Button } from './ToggleTheme.styled';

const ToggleTheme = ({ toggleTheme, theme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <img src={switchToLight} width="40" height="24" />
      ) : (
        <img src={switchToDark} width="40" height="24" />
      )}
    </Button>
  );
};

export default ToggleTheme;
