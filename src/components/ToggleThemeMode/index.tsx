import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import Styles from './styles';
import IconSun from 'components/IconSun';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetTheme } from 'store/actions';
import IconMoon from 'components/IconMoon';
import { State } from 'store/types';

const ToggleThemeMode: React.FC = ({ ...props }) => {
  const { theme } = useSelector((state: State) => state);
  const [checked, setChecked] = useState(theme === 'light' ? false : true);
  const dispatch = useDispatch();

  const handleOnChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (!checked) dispatch(actionSetTheme('light'));
    else dispatch(actionSetTheme('dark'));
  }, [checked]);

  useEffect(() => {
    dispatch(actionSetTheme(theme));
  }, []);

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
