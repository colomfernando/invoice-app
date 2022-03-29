import React from 'react';
import Styles from './styles';
import { Status } from 'store/types';
import getDate from 'utils/getDate';

export interface PropsInvoiceCard {
  id: number;
  due: number;
  name: string;
  total: number;
  status: Status;
}

const InvoiceCard: React.FC<PropsInvoiceCard> = ({
  id,
  due,
  name,
  status,
  total,
  ...props
}) => {
  return (
    <Styles.InvoiceCard {...props}>
      <Styles.Id>{`#${id}`}</Styles.Id>
      <Styles.Due>{getDate(due)}</Styles.Due>
      <Styles.Name>{name}</Styles.Name>
      <Styles.Total>{total}</Styles.Total>
      <Styles.Status status={status} />
    </Styles.InvoiceCard>
  );
};

export default InvoiceCard;
