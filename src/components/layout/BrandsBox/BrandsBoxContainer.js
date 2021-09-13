import { connect } from 'react-redux';
import BrandsBox from './BrandsBox';

import { getAllBrands } from '../../../redux/brandRedux.js';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
});

export default connect(mapStateToProps)(BrandsBox);
