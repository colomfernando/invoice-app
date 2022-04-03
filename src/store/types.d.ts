export interface BaseBillData {
  name: string;
  email: string;
}

export interface BillData extends BaseBillData {
  street: string;
  number?: number;
  complement?: string;
  country: string;
  city: string;
  postalCode: number;
}

export type Status = 'paid' | 'pending';
export type Theme = 'lightMode' | 'darkMode';

export interface Item {
  description: string;
  qty: number;
  price: number;
}

export interface Invoice {
  id: number;
  date: number;
  due: number;
  status: Status;
  billFrom: BaseBillData;
  billTo: BillData;
  items: Item[];
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
