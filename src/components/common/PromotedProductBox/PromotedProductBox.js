import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';

const PromotedProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  addToCart,
  id,
  quantity,
  isStarred,
}) => {
  const handleAddToCart = (name, price, image, quantity, id) => {
    const cartPayload = {
      name: name,
      price: price,
      image: image,
      quantity: quantity,
      productId: id,
    };
    addToCart(cartPayload);
  };

  const checkStars = id => {
    const retrievedStorage = JSON.parse(localStorage.getItem('stars'));
    if (retrievedStorage !== null) {
      retrievedStorage.filter(item => {
        if (item.id === id) {
          stars = item.stars;
          return stars;
        }
        return stars;
      });
    }
    return stars;
  };

  const checkStarred = id => {
    const retrievedStorage = JSON.parse(localStorage.getItem('stars'));
    if (retrievedStorage !== null) {
      retrievedStorage.filter(item => {
        if (item.id === id) isStarred = item.isStarred;
        return isStarred;
      });
    }
    return isStarred;
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.title}`}>
        <h5>HOT DEALS</h5>
      </div>
      <div className={styles.photo}>
        <Link to={`/product/${name}`}>
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
        </Link>
        <div className={styles.buttons}>
          <Button
            variant='small'
            onClick={event => {
              event.preventDefault();
              return handleAddToCart(name, price, image, quantity, id);
            }}
          >
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>

      <div className={styles.content}>
        <Link to={`/product/${name}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          <ProductRating id={id} stars={checkStars(id)} isStarred={checkStarred(id)} />
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
};

PromotedProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  addToCart: PropTypes.func,
  quantity: PropTypes.number,
  isStarred: PropTypes.bool,
};

PromotedProductBox.defaultProps = {
  quantity: 1,
};

export default PromotedProductBox;
