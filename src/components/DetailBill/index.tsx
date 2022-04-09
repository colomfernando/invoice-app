import React from 'react';
import Styles from './styles';

export interface PropsDetailBill {
  title: string;
  name: string;
  email: string;
  street?: string;
  number?: string | number;
  complement?: string;
  city?: string;
  country?: string;
  postalCode?: string | number;
}

const DetailBill: React.FC<PropsDetailBill> = ({
  title,
  name,
  email,
  street,
  number,
  complement,
  city,
  country,
  postalCode,
  ...props
}) => {
  const directionStreet = [street, number, complement]
    .filter(Boolean)
    .join(' ');
  const directionCountry = [country, city, postalCode]
    .filter(Boolean)
    .join(' ');

  return (
    <Styles.Wrapper {...props}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Inner>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Text>{email}</Styles.Text>
        {!!directionStreet && <Styles.Text>{directionStreet}</Styles.Text>}
        {!!directionCountry && <Styles.Text>{directionCountry}</Styles.Text>}
      </Styles.Inner>
    </Styles.Wrapper>
  );
};

export default DetailBill;
