import React from 'react';
import { useParams } from 'react-router-dom';
const Invoice: React.FC = () => {
  const { id: invoiceId } = useParams();
  console.log('invoiceId :>> ', invoiceId);
  return <div>invoice detail</div>;
};

export default Invoice;
