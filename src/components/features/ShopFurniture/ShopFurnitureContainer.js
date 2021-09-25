import { connect } from 'react-redux';

import ShopFurniture from './ShopFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(ShopFurniture);
