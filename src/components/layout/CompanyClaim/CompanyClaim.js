import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = ({ cartCount }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div className='col text-center'>
          <span>

            <a href='/#' />

            <img src='/images/logo.png' alt='Bazar' className={styles.image} />

          </span>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <NavLink exact to={'/cart'} activeClassName='active'>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>{cartCount}</div>
            </a>
          </NavLink>
          <div className={styles.phoneNumber}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CompanyClaim.propTypes = {
  cartCount: PropTypes.number,
};

export default CompanyClaim;
