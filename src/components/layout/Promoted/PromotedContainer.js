import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import Promoted from './Promoted';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Promoted);
