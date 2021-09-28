/* selectors */
export const getAll = ({ products }) => {
  let categories = [];
  products.map(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  });
  return categories;
};

export const getCount = ({ categories }) => categories.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
