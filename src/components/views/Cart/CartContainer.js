import { connect } from 'react-redux';
import Cart from './Cart';
import { getAll, removeProduct, removeProducts } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: name => dispatch(removeProduct(name)),
    removeProducts: () => dispatch(removeProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
