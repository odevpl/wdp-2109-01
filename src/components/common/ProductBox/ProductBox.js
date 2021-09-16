import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  image,
  stars,
  oldPrice,
  favourite,
  addToFavourite,
  isStarred,
  compare,
  addToCompare,
  numberOfProductsToCompare,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={name} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        <ProductRating id={id} stars={stars} isStarred={isStarred} />
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant={favourite ? 'favourite' : 'outline'}
          onClick={event => {
            event.preventDefault();
            return addToFavourite(id);
          }}
        >
          <FontAwesomeIcon icon={faHeart}>Favourite</FontAwesomeIcon>
        </Button>
        <Button
          variant={compare ? 'compare' : 'outline'}
          onClick={event => {
            if (numberOfProductsToCompare >= 4) {
              event.preventDefault();
              alert('You can only add four products to compare!');
            } else {
              event.preventDefault();
              return addToCompare(id);
            }
          }}
        >
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

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  favourite: PropTypes.bool,
  compare: PropTypes.bool,
  addToFavourite: PropTypes.func,
  addToCompare: PropTypes.func,
  numberOfProductsToCompare: PropTypes.number,
  image: PropTypes.string,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
};

export default ProductBox;
