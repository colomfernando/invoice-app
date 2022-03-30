const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

/**
 * It takes a number and returns a string
 * @param {number} value - The value to be formatted.
 * @returns {string} A string.
 */
const currencyFormatter = (value: number): string => {
  return formatter.format(value);
};

export default currencyFormatter;
