import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, addToFavourite } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props;
  return {
    addToFavourite: id => dispatch(addToFavourite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
