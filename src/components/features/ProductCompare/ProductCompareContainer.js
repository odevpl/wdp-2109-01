import { connect } from 'react-redux';
import ProductCompare from './ProductCompare';
import {
  getProductsToCompare,
  removeFromCompare,
  removeAllFromCompare,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getProductsToCompare(state),
});

const mapDispatchToProps = (dispatch /* props */) => {
  //const { id } = props;
  return {
    removeFromCompare: id => dispatch(removeFromCompare(id)),
    removeAllFromCompare: () => dispatch(removeAllFromCompare()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCompare);
