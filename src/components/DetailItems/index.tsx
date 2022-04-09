import React from 'react';
import getTotalInvoices from 'utils/getTotalInvoice';
import { Item } from 'store/types';
import Styles from './styles';
import currencyFormatter from 'utils/currencyFormatter';

export interface PropsDetailItems {
  data: Item[];
}

const DetailItems: React.FC<PropsDetailItems> = ({ data, ...props }) => {
  const titles = [...Object.keys(data[0]), 'total'];

  const itemsWithTotal = data.map((item) => ({
    ...item,
    total: getTotalInvoices([item]),
  }));

  return (
    <Styles.Wrapper {...props}>
      <Styles.Grid>
        {titles.map((title, idx) => (
          <Styles.Title key={idx.toString()}>{title}</Styles.Title>
        ))}
      </Styles.Grid>

      {itemsWithTotal.map((item, idx) => (
        <Styles.Grid key={idx.toString()}>
          <Styles.Description>{item.description}</Styles.Description>
          <Styles.Text>{item.qty}</Styles.Text>
          <Styles.Text>{currencyFormatter(Number(item.price))}</Styles.Text>
          <Styles.Text>{currencyFormatter(Number(item.total))}</Styles.Text>
        </Styles.Grid>
      ))}
    </Styles.Wrapper>
  );
};

export default DetailItems;
