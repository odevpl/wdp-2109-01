import { connect } from 'react-redux';
import { getAll, getCount } from '../../../redux/productsRedux';

import Promoted from './Promoted';

const mapStateToProps = state => ({
  promotions: getAll(state),
  promotionsCount: getCount(state),
});

export default connect(mapStateToProps)(Promoted);
