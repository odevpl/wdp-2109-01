import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, addTofavourite } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props;
  return {
    addTofavourite: id => dispatch(addTofavourite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
