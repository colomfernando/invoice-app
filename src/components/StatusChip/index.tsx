import React from 'react';
import { Status } from 'store/types';
import Styles from './styles';

export interface PropsStatus {
  status: Status;
}

const StatusChip: React.FC<PropsStatus> = ({ status, ...props }) => {
  return (
    <Styles.Wrapper {...props} status={status}>
      <Styles.Dot status={status} />
      <Styles.Status status={status}>{status}</Styles.Status>
    </Styles.Wrapper>
  );
};

export default StatusChip;
