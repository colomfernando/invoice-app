import React from 'react';
// import { useParams } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import FormInvoice from 'components/FormInvoice';

const Invoice: React.FC = () => {
  // const { id: invoiceId } = useParams();
  return (
    <MainLayout>
      <>
        <FormInvoice />
      </>
    </MainLayout>
  );
};

export default Invoice;
