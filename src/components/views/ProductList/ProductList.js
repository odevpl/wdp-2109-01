import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../layout/Brands/BrandsContainer';
import ShopFurniture from '../../features/ShopFurniture/ShopFurnitureContainer';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row ${styles.row}`}>
        <div className='col-12'>Banner</div>
      </div>
    </div>
    <div className='container'>
      <div className={`row ${styles.row}`}>
        <div className='col-9'>
          <ShopFurniture tileNumber={12} />
        </div>
        <div className='col-3'>Filters</div>
      </div>
    </div>
    <div className='container'>
      <div className={`row ${styles.row}`}>
        <div className='col-12'>
          <Brands />
        </div>
      </div>
    </div>
  </div>
);

ProductList.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

ProductList.defaultProps = {
  brands: [],
};

export default ProductList;
