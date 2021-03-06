import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { Link } from 'react-router-dom';

const ProductSearch = ({ categories, setSearchValue, filters }) => {
  let searchPhrase = '';
  if (filters) {
    searchPhrase = filters.searchPhrase.replace(/\s/g, '_');
  }

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div>
          <ul>
            Select <span className={styles.span}>a category</span>
            {categories.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input
          placeholder='Search...'
          type='text'
          onChange={e => setSearchValue(e.target.value)}
        />
        <button>
          <Link to={`/search/${searchPhrase}`}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </Link>
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
  setSearchValue: PropTypes.func,
  filters: PropTypes.string,
};

ProductSearch.defaultProps = {
  categories: [],
};

export default ProductSearch;
