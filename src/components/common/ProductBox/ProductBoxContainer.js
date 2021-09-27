import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  addToFavourite,
  addToCompare,
  getProductsToCompare,
} from '../../../redux/productsRedux.js';
import { addProduct } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  numberOfProductsToCompare: getProductsToCompare(state).length,
});

const mapDispatchToProps = (dispatch, props) => {
  // const { id } = props;
  return {
    addToFavourite: id => dispatch(addToFavourite(id)),
    addToCompare: id => dispatch(addToCompare(id)),
    addToCart: cartPayload => dispatch(addProduct(cartPayload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
