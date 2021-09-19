import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const PromotedProductBox = ({ name, price, promo, stars, image, oldPrice }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={name} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.timeBar}>
        <div className='row justify-content-around'>
          <div className={`col-2 ${styles.timeBarItem}`}>
            <div className={styles.number}>25</div>
            <div className={styles.unit}>DAYS</div>
          </div>
          <div className={`col-2 ${styles.timeBarItem}`}>
            <div className={styles.number}>10</div>
            <div className={styles.unit}>HRS</div>
          </div>
          <div className={`col-2 ${styles.timeBarItem}`}>
            <div className={styles.number}>45</div>
            <div className={styles.unit}>MINS</div>
          </div>
          <div className={`col-2 ${styles.timeBarItem}`}>
            <div className={styles.number}>30</div>
            <div className={styles.unit}>SECS</div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>

    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <button key={i}>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </button>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div>
        <Button variant='promotedOutline'>
          <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
        </Button>
        <Button variant='promotedOutline'>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='promotedOutline'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <div className={styles.oldPrice}>{oldPrice ? '$ ' + oldPrice : ''}</div>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

PromotedProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
};

export default PromotedProductBox;
