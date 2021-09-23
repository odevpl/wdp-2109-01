/* selectors */
export const getAll = ({ products }) => {
  let receivedFavs = JSON.parse(localStorage.getItem('favs'));
  let receivedStars = JSON.parse(localStorage.getItem('stars'));

  if (receivedFavs != null) {
    products.map(product => {
      receivedFavs.map(item => {
        if (item.id === product.id) {
          product.favourite = item.favourite;
          return product;
        }
        return product;
      });
      return product;
    });
  }

  if (receivedStars != null) {
    products.map(product => {
      receivedStars.map(item => {
        if (item.id === product.id) {
          product.stars = item.stars;
          product.isStarred = item.isStarred;
          return product;
        }
        return product;
      });
      return product;
    });
  }
  return products;
};

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
      let received = JSON.parse(localStorage.getItem('stars'));

      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          if (product.stars === action.payload.i) {
            // number below as example only: once other storage available (customer's reviews?), should take number from there
            product.stars = 2;
            product.isStarred = false;

            if (received != null && received.length > 1) {
              let send = received.filter(item => {
                return item.id !== product.id;
              });
              localStorage.setItem('stars', JSON.stringify(send));
            } else if (received != null && received.length <= 1) {
              localStorage.removeItem('stars');
            } else if (received === null) {
              product.isStarred = true;
              received = [];
              received.push(product);
              localStorage.setItem('stars', JSON.stringify(received));
            }
            return product;
          } else if (product.stars !== action.payload.i) {
            product.stars = action.payload.i;
            product.isStarred = true;
            if (received != null) {
              let send = received.filter(item => {
                return item.id !== product.id;
              });
              send.push(product);
              localStorage.setItem('stars', JSON.stringify(send));
            } else if (received === null) {
              received = [];
              received.push(product);
              localStorage.setItem('stars', JSON.stringify(received));
            }
            return product;
          }
        }
        return product;
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
