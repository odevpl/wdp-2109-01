import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
<<<<<<< HEAD
import feedbacksReducer from './feedbacksRedux';
=======
import postsReducer from './postsRedux';
>>>>>>> 7194c19 (Add Blog without Button)

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
<<<<<<< HEAD
  feedbacks: feedbacksReducer,
=======
  posts: postsReducer,
>>>>>>> 7194c19 (Add Blog without Button)
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
