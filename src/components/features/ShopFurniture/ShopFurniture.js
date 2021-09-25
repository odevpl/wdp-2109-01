import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShopFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class ShopFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { products, tileNumber } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row'>
              <div className={'col-4 ' + styles.heading}>
                <h3>Furniture</h3>
              </div>

              <div className={'col-4 ' + styles.heading}>
                <p>Sort By:</p>
              </div>

              <div className={'col-2 ' + styles.heading}>
                <p>Show</p>
              </div>

              <div className={'col-2 ' + styles.heading}>
                <p>Switches</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          {categoryProducts
            .slice(activePage * tileNumber, (activePage + 1) * tileNumber)
            .map(item => (
              <div key={item.id} className='col-lg-4 col-sm-6 col-xs-12'>
                <ProductBox {...item} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

ShopFurniture.propTypes = {
  children: PropTypes.node,

  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      shopFurniture: PropTypes.bool,
    })
  ),
  tileNumber: PropTypes.number,
};

ShopFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default ShopFurniture;
