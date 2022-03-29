export interface BillData {
  name: string;
  email: string;
  street: string;
  number?: number;
  complement?: string;
  city: string;
  postalCode: string;
}

export type Status = 'paid' | 'pending';
export type Theme = 'lightMode' | 'darkMode';

export interface Invoice {
  id: number;
  invoiceDate: number;
  due: number;
  description: string;
  status: Status;
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
  theme: Theme;
}

export interface Action<P> {
  type: string;
  payload: P;
}

export type Actions = Action<Invoice> | Action<Theme>;
