import React from 'react';
import Styles from './styles';

export interface PropsIconButton {
  onClick: () => void;
  Icon: React.FC;
}
const IconButton: React.FC<PropsIconButton> = ({
  Icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <Styles.Button type="button" onClick={onClick} {...props}>
      {<Icon />}
      {children}
    </Styles.Button>
  );
};

export default IconButton;
