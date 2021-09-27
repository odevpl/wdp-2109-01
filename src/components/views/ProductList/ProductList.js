import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Brands from '../../layout/Brands/BrandsContainer';
import ShopFurniture from '../../features/ShopFurniture/ShopFurnitureContainer';
import ProductBanner from '../../common/images/productListBanner.png';
import FilterByPrice from '../../features/FilterByPrice/FilterByPrice';
import FilterByColor from '../../features/FilterByColor/FilterByColor';
import FilterByCategories from '../../features/FilterByCategories/FilterByCategories';
import SizeFilter from '../../features/SizeFilter/SizeFilter';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row pt-0 ${styles.row}`}>
        <div className='col-12 no-gutters'>
          <div className={`row ${styles.bannerImage}`}>
            <img src={ProductBanner} alt='banner' />
          </div>
          <div className={`row ${styles.bannerMenu}`}>
            <p>
              Home <FontAwesomeIcon icon={faChevronRight} size='xs'></FontAwesomeIcon>{' '}
              <span>Furniture</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className={`row ${styles.row}`}>
        <div className='col-9'>
          <ShopFurniture tileNumber={12} />
        </div>
        <div className='col-3'>
          <FilterByPrice />
          <FilterByColor />
          <SizeFilter />
          <FilterByCategories />
        </div>
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
