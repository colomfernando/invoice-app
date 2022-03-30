import React from 'react';
import Styles from './styles';
import { BillData, Status } from 'store/types';
import getDate from 'utils/getDate';
import currencyFormatter from 'utils/currencyFormatter';

export interface PropsInvoiceCard {
  id: number;
  due: number;
  billFrom: BillData;
  total: number;
  status: Status;
}

const InvoiceCard: React.FC<PropsInvoiceCard> = ({
  id,
  due,
  billFrom,
  status,
  total,
  ...props
}) => {
  const { name } = billFrom;

  return (
    <Styles.InvoiceCard {...props}>
      <Styles.Id>{`#${id}`}</Styles.Id>
      <Styles.Due>{`Due ${getDate(due)}`}</Styles.Due>
      <Styles.Name>{name}</Styles.Name>
      <Styles.Total>{currencyFormatter(total)}</Styles.Total>
      <Styles.Status status={status} />
    </Styles.InvoiceCard>
  );
};

export default InvoiceCard;
