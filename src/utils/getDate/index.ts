const getDate = (unixTime: number) => {
  const date = new Date(unixTime);

  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });

  return `${day} ${month} ${year}`;
};

export default getDate;
