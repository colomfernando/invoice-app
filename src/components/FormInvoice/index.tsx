import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initialValues, schemaValidation } from './schema';
import Styles from './styles';
import { FieldArray, Formik } from 'formik';
import getLastId from 'store/selectors/getLastId';
import { useSelector, useDispatch } from 'react-redux';
import { Invoice, State, Status } from 'store/types';
import { actionEditInvoice, actionSaveInvoice } from 'store/actions';
import IconAdd from 'components/IconAdd';
import IconDelete from 'components/IconDelete';
import updateInvoices from 'store/selectors/updateInvoices';

export interface PropsFormInvoice {
  invoiceValues?: Invoice;
}
const FormInvoice: React.FC<PropsFormInvoice> = ({
  invoiceValues,
  ...props
}) => {
  const { invoices } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (values: Omit<Invoice, 'id' | 'status'>) => {
    const id = getLastId(invoices) + 1;
    const data = { ...values, status: 'pending' as Status, id };
    dispatch(actionSaveInvoice(data));
    navigate('/');
  };

  const handleOnSubmitUpdate = (values: Omit<Invoice, 'id' | 'status'>) => {
    const updatedInvoice = { ...invoiceValues, ...values } as Invoice;
    const updateDInvoices = updateInvoices(invoices, updatedInvoice);
    dispatch(actionEditInvoice(updateDInvoices));
    navigate('/');
  };

  return (
    <Formik
      initialValues={invoiceValues || initialValues}
      validationSchema={schemaValidation}
      onSubmit={invoiceValues ? handleOnSubmitUpdate : handleOnSubmit}
    >
      {({ values }) => (
        <Styles.FormFormik {...props}>
          <Styles.WrapperSection>
            <Styles.Title>Bill from</Styles.Title>
            <Styles.BaseInput
              labelValue="Name"
              name="billFrom.name"
              type="text"
              placeholder="Name"
              style={{ flexBasis: '45%' }}
            />
            <Styles.BaseInput
              labelValue="Email"
              name="billFrom.email"
              type="email"
              placeholder="Email"
              style={{ flexBasis: '45%' }}
            />
          </Styles.WrapperSection>
          <Styles.WrapperSection>
            <Styles.Title>Bill To</Styles.Title>
            <Styles.BaseInput
              labelValue="Name"
              name="billTo.name"
              type="text"
              placeholder="Name"
              style={{ flexBasis: '45%' }}
            />
            <Styles.BaseInput
              labelValue="Email"
              name="billTo.email"
              type="email"
              placeholder="Email"
              style={{ flexBasis: '45%' }}
            />
            <Styles.BaseInput
              labelValue="Street"
              name="billTo.street"
              type="text"
              placeholder="Street"
              style={{ flexBasis: '30%' }}
            />
            <Styles.BaseInput
              labelValue="Number"
              name="billTo.number"
              type="number"
              placeholder="Number"
              style={{ flexBasis: '30%' }}
            />
            <Styles.BaseInput
              labelValue="Complement"
              name="billTo.complement"
              type="text"
              placeholder="Complement"
              style={{ flexBasis: '30%' }}
            />
            <Styles.BaseInput
              labelValue="Country"
              name="billTo.country"
              type="text"
              placeholder="Country"
              style={{ flexBasis: '30%' }}
            />
            <Styles.BaseInput
              labelValue="City"
              name="billTo.city"
              type="text"
              placeholder="City"
              style={{ flexBasis: '30%' }}
            />
            <Styles.BaseInput
              labelValue="Postal code"
              name="billTo.postalCode"
              type="number"
              placeholder="Postal code"
              style={{ flexBasis: '30%' }}
            />
          </Styles.WrapperSection>
          <Styles.WrapperSection>
            <Styles.BaseInput
              labelValue="Invoice date"
              name="date"
              type="date"
              placeholder="Date"
              style={{ flexBasis: '45%' }}
            />
            <Styles.BaseInput
              labelValue="Invoice due"
              name="due"
              type="date"
              placeholder="Invoice due"
              style={{ flexBasis: '45%' }}
            />
          </Styles.WrapperSection>
          <Styles.WrapperSection>
            <Styles.Title>Items</Styles.Title>
            <FieldArray name="items">
              {({ remove, push }) => (
                <>
                  {values.items.length > 0 &&
                    values.items.map((_, index) => (
                      <Styles.WrapperItems key={index.toString()}>
                        <Styles.BaseInput
                          labelValue="Description"
                          name={`items.${index}.description`}
                          type="text"
                          placeholder="Description"
                          style={{ flexBasis: '45%' }}
                        />
                        <Styles.BaseInput
                          labelValue="Quantity"
                          name={`items.${index}.qty`}
                          type="number"
                          placeholder="Quantity"
                          style={{ flexBasis: '20%' }}
                        />
                        <Styles.BaseInput
                          labelValue="Price"
                          name={`items.${index}.price`}
                          type="number"
                          placeholder="Price"
                          style={{ flexBasis: '20%' }}
                        />
                        {values.items.length > 1 && (
                          <Styles.DeleteButton
                            Icon={IconDelete}
                            onClick={() => remove(index)}
                          />
                        )}
                      </Styles.WrapperItems>
                    ))}
                  <Styles.AddButton
                    Icon={IconAdd}
                    onClick={() =>
                      push({ description: '', qty: '', price: '' })
                    }
                  >
                    Add item
                  </Styles.AddButton>
                </>
              )}
            </FieldArray>
          </Styles.WrapperSection>

          <Styles.Submit type="submit">Submit</Styles.Submit>
        </Styles.FormFormik>
      )}
    </Formik>
  );
};

export default FormInvoice;
