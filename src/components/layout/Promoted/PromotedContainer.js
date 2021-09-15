import { connect } from 'react-redux';

import Promoted from './Promoted';

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Promoted);
