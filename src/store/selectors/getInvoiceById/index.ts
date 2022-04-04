import { Invoice } from 'store/types';

const getInvoiceById = (
  invoices: Invoice[],
  id: number
): Invoice | undefined => {
  const invoiceById = invoices.find((item) => item.id === id);
  return invoiceById;
};

export default getInvoiceById;
