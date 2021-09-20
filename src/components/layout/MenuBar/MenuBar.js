import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearchContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';
import { Link } from 'react-router-dom';

const MenuBar = ({ children }) => {
  const [view, setview] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.wrapper}>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <div className={'col ' + styles.menu + (view ? ' ' + styles.visibility : '')}>
            <ul>
              <li>
                <Link to={'/'} className={styles.active}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/shop/furniture'}>Furniture</Link>
              </li>
              <li>
                <Link to={'/shop/chair'}>Chair</Link>
              </li>
              <li>
                <Link to={'/shop/table'}>Table</Link>
              </li>
              <li>
                <Link to={'/shop/sofa'}>Sofa</Link>
              </li>
              <li>
                <Link to={'/shop/bedroom'}>Bedroom</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
            </ul>
          </div>
          <button href='#' className={styles.dropdown} onClick={() => setview(!view)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
