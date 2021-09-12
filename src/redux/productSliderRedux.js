/* selectors */

export const getAllProducts = ({ products }) => products;

/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
