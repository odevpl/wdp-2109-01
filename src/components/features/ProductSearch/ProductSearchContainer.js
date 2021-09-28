import { connect } from 'react-redux';

import ProductSearch from './ProductSearch';

import { getAll } from '../../../redux/categoriesRedux.js';
import { setSearchValue, getFilters } from '../../../redux/filtersRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  filters: getFilters(state),
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: phrase => dispatch(setSearchValue(phrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
