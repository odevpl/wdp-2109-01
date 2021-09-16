import { connect } from 'react-redux';
import { getAll } from '../../../redux/promoRedux';

import Promoted from './Promoted';

const mapStateToProps = state => ({
  promotions: getAll(state),
});

export default connect(mapStateToProps)(Promoted);
