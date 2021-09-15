import { connect } from 'react-redux';
import ProductSlider from './ProductSlider';
import { getAllProducts } from '../../../redux/productsReduxSlider';

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

export default connect(mapStateToProps)(ProductSlider);
