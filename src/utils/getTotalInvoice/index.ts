import { Item } from 'store/types';

/**
 * "Get the total price of all items in the array."
 *
 * The function is a pure function, meaning that it does not modify any of the objects passed to it as
 * arguments and it has no side effects
 * @param {Item[]} items - An array of items that are being purchased.
 * @returns The total of all the prices.
 */
const getTotalInvoices = (items: Item[]) => {
  const prices = items.map((item) => Number(item.price) * Number(item.qty));

  const total = prices.reduce<number>((acc, act) => acc + act, 0);
  return total;
};

export default getTotalInvoices;
