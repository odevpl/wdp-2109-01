import { connect } from 'react-redux';
import Cart from './Cart';
import {
  getAll,
  removeProduct,
  removeProducts,
  updateQuantity,
} from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  subtotal: 0,
});

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: name => dispatch(removeProduct(name)),
    removeProducts: () => dispatch(removeProducts()),
    updateQuantity: (quantity, productId) =>
      dispatch(updateQuantity(quantity, productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
