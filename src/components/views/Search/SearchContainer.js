import { connect } from 'react-redux';

import Search from './Search';

import { getProducts, getCategories, getFilters } from '../../../redux/filtersRedux.js';

const mapStateToProps = state => ({
  categories: getCategories(state),
  products: getProducts(state),
  filters: getFilters(state),
});

export default connect(mapStateToProps)(Search);
