import { connect } from 'react-redux';
import Gallery from './Gallery';

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Gallery);
