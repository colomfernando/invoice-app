import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import DetailInvoice from 'components/DetailInvoice';
import { useSelector } from 'react-redux';
import getInvoiceById from 'store/selectors/getInvoiceById';
import { State } from 'store/types';

const DetailsInvoice: React.FC = () => {
  const { invoices } = useSelector((state: State) => state);
  const { id: invoiceId } = useParams();

  const selectedInvoice = getInvoiceById(invoices, Number(invoiceId));
  if (!selectedInvoice) return null;
  return (
    <MainLayout>
      <DetailInvoice invoice={selectedInvoice} />
    </MainLayout>
  );
};

export default DetailsInvoice;
