import { Status } from 'store/types';
const invoices = [
  {
    id: 1,
    date: '2022-04-06',
    due: '2022-04-07',
    status: 'paid' as Status,
    items: [{ description: 'lorem ipsum', qty: 1, price: 1234.54 }],
    billFrom: {
      name: 'Test',
      email: 'test@test.com',
    },
    billTo: {
      name: 'Test',
      email: 'test@test.com',
      street: '9 de julio',
      city: 'Buenos Aires',
      country: 'Argentina',
      postalCode: 1414,
    },
  },
  {
    id: 2,
    date: '2022-04-06',
    due: '2022-04-09',
    status: 'pending' as Status,
    items: [
      { description: 'lorem ipsum', qty: 2, price: 1 },
      { description: 'lorem ipsum', qty: 2, price: 2 },
    ],
    billFrom: {
      name: 'Test',
      email: 'test@test.com',
    },
    billTo: {
      name: 'Test',
      email: 'test@test.com',
      street: '9 de julio',
      city: 'Buenos Aires',
      country: 'Argentina',
      postalCode: 1414,
    },
  },
];

export default invoices;
