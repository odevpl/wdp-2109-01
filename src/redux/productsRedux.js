/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_FAVORITUE = createActionName('ADD_TO_FAVORITUE');

/* action creators */
export const addToFavoritue = payload => ({ payload, type: ADD_TO_FAVORITUE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITUE: {
      const id = action.payload;
      return statePart.map(product =>
        product.id == id
          ? { ...product, favoritue: !product.favoritue }
          : { ...product }
      );
    }
    default:
      return statePart;
  }
}
