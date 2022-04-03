import { Invoice } from 'store/types';

const getLastId = (invoices: Invoice[]): number => {
  const ids = invoices.map((invoice) => invoice.id);

  return Math.max(...ids);
};

export default getLastId;
