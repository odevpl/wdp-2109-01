import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayoutContainer from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPageContainer';
import Register from './components/views/Register/Register';
import Cart from './components/views/Cart/CartContainer';
import BlogArchive from './components/layout/BlogArchive/BlogArchive';
import Login from './components/views/Login/Login';
import Search from './components/views/Search/SearchContainer';
import ProductReview from './components/features/ProductReview/ProductReview';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayoutContainer>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/cart'} component={Cart} />
          <Route exact path={'/blog'} component={BlogArchive} />
          <Route exact path={'/search'} component={Search} />
          <Route exact path={'/search/:searchPhrase'} component={Search} />
          <Route exact path={'/product/:productId/review'} component={ProductReview} />
        </Switch>
      </MainLayoutContainer>
    </BrowserRouter>
  </Provider>
);

export default App;
