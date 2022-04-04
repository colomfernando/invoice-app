import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import { useSelector } from 'react-redux';
import FormInvoice from 'components/FormInvoice';
import getInvoiceById from 'store/selectors/getInvoiceById';
import { State } from 'store/types';

const EditInvoice: React.FC = () => {
  const { invoices } = useSelector((state: State) => state);
  const { id: invoiceId } = useParams();

  const selectedInvoice = getInvoiceById(invoices, Number(invoiceId));

  return (
    <MainLayout>
      <>
        <FormInvoice invoiceValues={selectedInvoice} />
      </>
    </MainLayout>
  );
};

export default EditInvoice;
