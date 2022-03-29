import React from 'react';
import Styles from './styles';
import MainLayout from 'layout/MainLayout';
import { Status } from 'store/types';
export interface Mock {
  id: number;
  due: number;
  name: string;
  status: Status;
  total: number;
}

const mock: Mock[] = [
  {
    id: 1,
    due: 1648513521143,
    name: 'Jose Perez',
    status: 'paid',
    total: 1234.54,
  },
  {
    id: 2,
    due: 1648513521143,
    name: 'Jose Perez',
    status: 'paid',
    total: 1234.54,
  },
  {
    id: 3,
    due: 1648513521143,
    name: 'Jose Perez',
    status: 'pending',
    total: 1234.54,
  },
];
const Home: React.FC = () => {
  return (
    <MainLayout>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.WrapperTitle>
            <Styles.Title>Invoices</Styles.Title>
            <Styles.TotalInvoice>{`${7} invoices`}</Styles.TotalInvoice>
          </Styles.WrapperTitle>
          <Styles.Filter />
          <Styles.CreateInvoice />
        </Styles.Header>
        {mock.map((item) => (
          <Styles.Invoice key={item.id} {...item} />
        ))}
      </Styles.Wrapper>
    </MainLayout>
  );
};

export default Home;
