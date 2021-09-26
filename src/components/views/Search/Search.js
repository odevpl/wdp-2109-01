import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Search = () => (
  <div className={styles.root}>
    <div className='container'>
      <NewFurniture tileNumber={8} />
    </div>
  </div>
);

Search.propTypes = {
  children: PropTypes.node,
  tileNumber: PropTypes.number,
};

export default Search;
