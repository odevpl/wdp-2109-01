import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../../common/Swipeable/Swipeable';
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
    const { categories, products, tileNumber } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / tileNumber);

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <button
            type='button'
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          ></button>
        </li>
      );
    }

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Furniture</h3>
                </div>

                <div className={'col-auto ' + styles.heading}>
                  <h3>Sort By:</h3>
                </div>

                <div className={'col-auto ' + styles.heading}>
                  <h3>Show</h3>
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
      </Swipeable>
    );
  }
}

ShopFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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
