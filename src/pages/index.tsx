import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles';
import MainLayout from 'layout/MainLayout';
import { Invoice, State, Status } from 'store/types';
import { useSelector } from 'react-redux';
import { Option } from 'components/FilterStatus';
export interface Mock {
  id: number;
  due: number;
  name: string;
  status: Status;
  total: number;
}

const Home: React.FC = () => {
  const { invoices } = useSelector((state: State) => state);

  const [invoicesState, setInvoicesState] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoicesState(invoices);
  }, []);

  const handleOnChangeFilter = (filters: Option[]) => {
    const values = filters.map((option) => option.value);
    if (!values.length) return setInvoicesState(invoices);

    const filterInvoices = invoices.filter((inv) =>
      values.includes(inv.status)
    );

    if (!filterInvoices.length) return setInvoicesState(invoices);
    return setInvoicesState(filterInvoices);
  };

  return (
    <MainLayout>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.WrapperTitle>
            <Styles.Title>Invoices</Styles.Title>
            <Styles.TotalInvoice>{`${invoices.length} invoices`}</Styles.TotalInvoice>
          </Styles.WrapperTitle>
          <Styles.Filter
            onChange={(options) => handleOnChangeFilter(options)}
          />
          <Link to="/invoice">
            <Styles.CreateInvoice />
          </Link>
        </Styles.Header>
        {!!invoicesState.length &&
          invoicesState.map((item) => (
            <Styles.Invoice key={item.id} {...item} />
          ))}
      </Styles.Wrapper>
    </MainLayout>
  );
};

export default Home;
