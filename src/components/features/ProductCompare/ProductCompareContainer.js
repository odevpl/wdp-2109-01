import { connect } from 'react-redux';
import ProductCompare from './ProductCompare';
import {
  getProductsToCompare,
  removeFromCompare,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getProductsToCompare(state),
});

const mapDispatchToProps = (dispatch /* props */) => {
  //const { id } = props;
  return {
    removeFromCompare: id => dispatch(removeFromCompare(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCompare);
