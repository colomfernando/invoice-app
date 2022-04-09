import { Invoice } from 'store/types';

const getLastId = (invoices: Invoice[]): number => {
  const ids = invoices.map((invoice) => invoice.id);

  return !ids.length ? 0 : Math.max(...ids);
};

export default getLastId;
