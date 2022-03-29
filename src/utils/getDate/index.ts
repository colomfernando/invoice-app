const getDate = (unixTime: number) => {
  const date = new Date(unixTime);

  return date.toLocaleString('default', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

export default getDate;
