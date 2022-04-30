import React from 'react';
import { Invoice, State, Status } from 'store/types';
import DetailItems from 'components/DetailItems';
import { useSelector, useDispatch } from 'react-redux';
import { actionEditInvoice, actionDeleteInvoice } from 'store/actions';
import updateInvoices from 'store/selectors/updateInvoices';
import { useNavigate } from 'react-router-dom';
import getTotalInvoices from 'utils/getTotalInvoice';
import currencyFormatter from 'utils/currencyFormatter';
import Styles from './styles';

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
        <Styles.WrapperInfo>
          <Styles.Id>{`Invoice #${id}`}</Styles.Id>
          <Styles.Status status={status} />
        </Styles.WrapperInfo>
        <Styles.WrapperButtons>
          <Styles.DeleteButton onClick={handleDeleteInvoice}>
            delete
          </Styles.DeleteButton>

          <Styles.EditButton>
            <Styles.LinkTo to={{ pathname: `/invoice/${id}/edit` }}>
              Edit
            </Styles.LinkTo>
          </Styles.EditButton>

          <Styles.PaidButton
            disabled={status === 'paid'}
            onClick={handleMarksPaid}
          >
            mark as paid
          </Styles.PaidButton>
        </Styles.WrapperButtons>
      </Styles.Header>
      <Styles.Body>
        <Styles.Row>
          <Styles.DetailBill title="From" {...billFrom} />
          <Styles.DetailBill title="To" {...billTo} />
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
        <Styles.Row>
          <Styles.Total>{`Total: ${currencyFormatter(
            getTotalInvoices(items)
          )}`}</Styles.Total>
        </Styles.Row>
      </Styles.Body>
    </Styles.Wrapper>
  );
};

export default DetailInvoice;
