import { connect } from 'react-redux';

import CompanyClaim from './CompanyClaim.js';

import { getCount } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  cartCount: getCount(state),
});

export default connect(mapStateToProps)(CompanyClaim);
