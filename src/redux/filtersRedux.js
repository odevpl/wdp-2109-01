import initialState from './initialState';

/* selectors */
export const getFilters = ({ filters }) => filters;

export const getCategories = ({ products, filters }) => {
  let filteredProducts = [];
  let categories = [];
  const pattern = new RegExp(filters.searchPhrase, 'i');
  filteredProducts = products.filter(item => pattern.test(item.name));

  // powyzej mamy wszystkie produkty przefiltrowane
  // teraz filteredProducts.map w poszukiwaniu product.category
  // jesli danego product.category nie ma w categories - dodaj
  // jesli jest omin

  filteredProducts.map(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  });
  return categories;
};

export const getProducts = ({ products, filters }) => {
  let output = [];
  const pattern = new RegExp(filters.searchPhrase, 'i');
  output = products.filter(item => pattern.test(item.name));
  return output;
};

/* action name creator */
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

//const createActionNameSearch = name => `app/search/${name}`;

/* action types */
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
/* action creators */
export const setSearchValue = payload => ({ payload, type: CHANGE_PHRASE });

//initialState.filters = '';

/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE: {
      return {
        searchPhrase: action.payload,
      };
    }
    default:
      return '';
  }
}
