import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Search = ({ products, categories, filters }) => (
  <div className={styles.root}>
    <div className='container'>
      <NewFurniture
        tileNumber={8}
        searchProducts={products}
        searchCategories={categories}
        filters={filters}
      />
    </div>
  </div>
);

Search.propTypes = {
  children: PropTypes.node,
  tileNumber: PropTypes.number,
  products: PropTypes.array,
  categories: PropTypes.array,
  filters: PropTypes.array,
};

export default Search;
