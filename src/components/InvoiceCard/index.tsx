import React from 'react';
import Styles from './styles';
import { BaseBillData, Item, Status } from 'store/types';
import getDate from 'utils/getDate';
import getTotalInvoices from 'utils/getTotalInvoice';
import currencyFormatter from 'utils/currencyFormatter';

export interface PropsInvoiceCard {
  id: number;
  due: string;
  billTo: BaseBillData;
  status: Status;
  items: Item[];
}

const InvoiceCard: React.FC<PropsInvoiceCard> = ({
  id,
  due,
  billTo,
  status,
  items,
  ...props
}) => {
  const { name } = billTo;

  const total = getTotalInvoices(items);

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
