const getDate = (data: string) => {
  const date = new Date(data.replaceAll('-', '/'));
  const day = date.getDate();

  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });

  return `${day} ${month} ${year}`;
};

export default getDate;
