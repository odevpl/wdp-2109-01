import React from 'react';
import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Search = () => (
  <div className={styles.root}>
    <div className={styles.search}>
      <NewFurniture />
    </div>
  </div>
);

export default Search;
