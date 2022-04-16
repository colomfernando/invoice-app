import React from 'react';
import { Invoice, State, Status } from 'store/types';
import DetailBill from 'components/DetailBill';
import DetailItems from 'components/DetailItems';
import { useSelector, useDispatch } from 'react-redux';
import { actionEditInvoice, actionDeleteInvoice } from 'store/actions';
import updateInvoices from 'store/selectors/updateInvoices';
import { useNavigate } from 'react-router-dom';
import StatusChip from 'components/StatusChip';
import Styles from './styles';

// TODO crear boton reutilizable
export interface PropsDetailInvoice {
  invoice: Invoice;
}
const DetailInvoice: React.FC<PropsDetailInvoice> = ({ invoice, ...props }) => {
  const { invoices } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, billFrom, billTo, date, due, status, items } = invoice;

  const handleMarksPaid = (): void => {
    const updatedInvoice = { id, status: 'paid' as Status };
    const updatedInvoices = updateInvoices(invoices, updatedInvoice);
    dispatch(actionEditInvoice(updatedInvoices));
  };

  const handleDeleteInvoice = () => {
    dispatch(actionDeleteInvoice(id));
    navigate('/');
  };

  return (
    <Styles.Wrapper {...props}>
      <Styles.Header>
        <Styles.Id>{`Invoice #${id}`}</Styles.Id>
        <StatusChip status={status} />
        <Styles.DeleteButton onClick={handleDeleteInvoice}>
          delete
        </Styles.DeleteButton>

        <Styles.EditButton>
          <Styles.LinkTo to={{ pathname: `/invoice/${id}/edit` }}>
            Edit
          </Styles.LinkTo>
        </Styles.EditButton>

        <Styles.PaidButton onClick={handleMarksPaid}>
          mark as paid
        </Styles.PaidButton>
      </Styles.Header>
      <Styles.Body>
        <Styles.Row>
          <DetailBill title="From" {...billFrom} />
          <DetailBill title="To" {...billTo} />
        </Styles.Row>
        <Styles.Row>
          <Styles.Text>{`Invoice date: ${date}`}</Styles.Text>
        </Styles.Row>
        <Styles.Row>
          <Styles.Text>{`Due: ${due}`}</Styles.Text>
        </Styles.Row>
        <Styles.Row>
          <DetailItems data={items} />
        </Styles.Row>
      </Styles.Body>
    </Styles.Wrapper>
  );
};

export default DetailInvoice;
