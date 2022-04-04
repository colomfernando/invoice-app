import { Invoice } from 'store/types';

const updateInvoices = (invoices: Invoice[], invoice: Invoice): Invoice[] => {
  return invoices.map((inv) => (inv.id === invoice.id ? invoice : inv));
};

export default updateInvoices;
