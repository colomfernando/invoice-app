import { Status } from 'store/types';
const invoices = [
  {
    id: 1,
    date: 1648513521140,
    description: 'lorem ipsum',
    due: 1648513521143,
    status: 'paid' as Status,
    total: 1234.54,
    qty: 1,
    price: 1234.54,
    billFrom: {
      name: 'Test',
      email: 'test@test.com',
      street: '9 de julio',
      city: 'Buenos Aires',
      postalCode: 1414,
    },
    billTo: {
      name: 'Test',
      email: 'test@test.com',
      street: '9 de julio',
      city: 'Buenos Aires',
      postalCode: 1414,
    },
  },
  {
    id: 2,
    date: 1648513521140,
    description: 'lorem ipsum',
    due: 1648513521143,
    status: 'pending' as Status,
    total: 1234.54,
    qty: 1,
    price: 1234.54,
    billFrom: {
      name: 'Test',
      email: 'test@test.com',
      street: '9 de julio',
      city: 'Buenos Aires',
      postalCode: 1414,
    },
    billTo: {
      name: 'Test',
      email: 'test@test.com',
      street: '9 de julio',
      city: 'Buenos Aires',
      postalCode: 1414,
    },
  },
];

export default invoices;
