/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductsToCompare = ({ products }) =>
  products.filter(item => item.compare === true);
/* action name creator */
const createActionName = name => `products/rating/${name}`;

/* action types */
export const SET_STARS = createActionName('SET_STARS');

/* action creator */
export const setStars = payload => ({ payload, type: SET_STARS });

/* action types */
export const ADD_TO_FAVOURITE = createActionName('ADD_TO_FAVOURITE');

export const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');

export const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');
/* action creators */
export const addToFavourite = payload => ({ payload, type: ADD_TO_FAVOURITE });

export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });

export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_STARS: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          if (product.stars === action.payload.i && product.isStarred) {
            localStorage.removeItem(product.id);
            // number below as example only: once other storage available (customer's reviews?), should take number from there
            product.stars = 2;
            return product;
          } else {
            product.stars = action.payload.i;
            product.isStarred = true;
            localStorage.setItem(product.id, JSON.stringify(product));
            return product;
          }
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case ADD_TO_FAVOURITE: {
      const id = action.payload;
      let received = JSON.parse(localStorage.getItem('favs'));

      const newStatePart = statePart.map(product => {
        if (product.id === id) {
          if (!product.favourite) {
            product.favourite = true;

            if (received != null) {
              received.push(product);
              localStorage.setItem('favs', JSON.stringify(received));
            } else if (received === null) {
              received = [];
              received.push(product);
              localStorage.setItem('favs', JSON.stringify(received));
            }
          } else if (product.favourite) {
            product.favourite = false;

            if (received.length > 1) {
              let send = received.filter(item => {
                return item.id !== product.id;
              });
              localStorage.setItem('favs', JSON.stringify(send));
            } else if (received.length <= 1) {
              localStorage.removeItem('favs');
            }
          }
        }
        return product;
      });
      return newStatePart;
    }
    case ADD_TO_COMPARE: {
      const id = action.payload;
      return statePart.map(product =>
        product.id === id && product.compare === false
          ? { ...product, compare: !product.compare }
          : { ...product }
      );
    }
    case REMOVE_FROM_COMPARE: {
      const id = action.payload;
      return statePart.map(product =>
        product.id === id ? { ...product, compare: false } : { ...product }
      );
    }
    default:
      return statePart;
  }
}
