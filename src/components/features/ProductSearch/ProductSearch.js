import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

import { Link } from 'react-router-dom';

const ProductSearch = ({ categories }) => {
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div>
          <ul>
            Select <span className={styles.span}>a category</span>
            {categories.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <Link exact to={'/search'}>
          <button>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </button>
        </Link>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

ProductSearch.defaultProps = {
  categories: [],
};

export default ProductSearch;
