import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, addToFavoritue } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props;
  return {
    addToFavoritue: id => dispatch(addToFavoritue(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
