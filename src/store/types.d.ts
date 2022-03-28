export interface BillData {
  id: number;
  name: string;
  email: string;
  street: string;
  number?: number;
  complement?: string;
  city: string;
  postalCode: string;
}

export interface Invoice {
  invoiceData: Date;
  invoiceDue: Date;
  description: string;
  item: {
    name: string;
    qty: number;
    price: number;
    total: number;
  };
  billFrom: BillData;
  billTo: BillData;
}

export interface State {
  invoices: Invoice[];
}

export interface Action<P> {
  type: string;
  payload: P;
}

export type Actions = Action<Invoice>;
