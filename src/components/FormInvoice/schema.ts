import * as Yup from 'yup';

export const initialValues = {
  date: '',
  due: '',
  billFrom: {
    name: '',
    email: '',
  },
  billTo: {
    name: '',
    email: '',
    street: '',
    number: '',
    complement: '',
    country: '',
    city: '',
    postalCode: '',
  },
  items: [
    {
      description: '',
      qty: '',
      price: '',
    },
  ],
};

export const schemaValidation = Yup.object({
  date: Yup.date().required('Date is required'),
  due: Yup.date().required('Due Date is required'),
  billFrom: Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
  }),
  billTo: Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    number: Yup.number(),
    complement: Yup.string(),
    country: Yup.string().required('Country is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.number().required('Postal code is required'),
  }),
  items: Yup.array().of(
    Yup.object({
      description: Yup.string().required('Description is required'),
      qty: Yup.string().required('Quantity is required'),
      price: Yup.string().required('Price is required'),
    })
  ),
});
