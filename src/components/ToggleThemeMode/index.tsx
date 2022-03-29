import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import Styles from './styles';
import IconSun from 'components/IconSun';
import { useDispatch } from 'react-redux';
import { actionSetTheme } from 'store/actions';
import IconMoon from 'components/IconMoon';

const ToggleThemeMode: React.FC = ({ ...props }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (!checked) dispatch(actionSetTheme('lightMode'));
    else dispatch(actionSetTheme('darkMode'));
  }, [checked]);

  return (
    <Styles.Wrapper {...props}>
      <Switch
        checked={checked}
        onChange={handleOnChange}
        uncheckedHandleIcon={<IconSun />}
        onColor="#2D4263"
        offColor="#fafafa"
        checkedHandleIcon={<IconMoon />}
        checkedIcon={<Styles.ThemeText></Styles.ThemeText>}
        uncheckedIcon={<Styles.ThemeText></Styles.ThemeText>}
      />
    </Styles.Wrapper>
  );
};

export default ToggleThemeMode;
