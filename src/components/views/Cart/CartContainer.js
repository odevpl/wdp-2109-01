import { connect } from 'react-redux';
import Cart from './Cart';
import { getAll } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Cart);
