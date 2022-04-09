import { Invoice } from 'store/types';

/**
 * "If the invoice id matches, return a new invoice with the updated properties, otherwise return the
 * original invoice."
 *
 * The function takes two arguments:
 *
 * invoices: Invoice[] - an array of invoices
 * invoice: Invoice | Partial<Invoice> - an invoice or a partial invoice
 * The function returns an array of invoices
 * @param {Invoice[]} invoices - Invoice[] - the current list of invoices
 * @param {Invoice | Partial<Invoice>} invoice - Invoice | Partial<Invoice>
 * @returns A new array with the updated invoice.
 */
const updateInvoices = (
  invoices: Invoice[],
  invoice: Invoice | Partial<Invoice>
): Invoice[] => {
  return invoices.map((inv) =>
    inv.id === invoice.id ? { ...inv, ...invoice } : inv
  );
};

export default updateInvoices;
