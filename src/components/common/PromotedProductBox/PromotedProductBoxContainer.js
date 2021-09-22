import { connect } from 'react-redux';
import PromotedProductBox from './PromotedProductBox';

import { addProduct } from '../../../redux/cartRedux.js';

const mapDispatchToProps = (dispatch /* props */) => {
  //const { id } = props;
  return {
    addToCart: cartPayload => dispatch(addProduct(cartPayload)),
  };
};

export default connect(null, mapDispatchToProps)(PromotedProductBox);
