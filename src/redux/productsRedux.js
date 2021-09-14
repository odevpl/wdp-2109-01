/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_favourite = createActionName('ADD_TO_favourite');

/* action creators */
export const addTofavourite = payload => ({ payload, type: ADD_TO_favourite });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_favourite: {
      const id = action.payload;
      return statePart.map(product =>
        product.id == id
          ? { ...product, favourite: !product.favourite }
          : { ...product }
      );
    }
    default:
      return statePart;
  }
}
