import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import ProductPopup from '../../features/ProductPopup/ProductPopup';
import { Link } from 'react-router-dom';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  image,
  stars,
  oldPrice,
  category,
  description,
  favourite,
  addToFavourite,
  compare,
  addToCompare,
  numberOfProductsToCompare,
  addToCart,
}) => {
  const [showPopup, togglePopup] = useState(false);

  const handlePopup = event => {
    event.preventDefault();
    return togglePopup(!showPopup);
  };

  const checkStars = () => {
    const retrievedStorage = JSON.parse(localStorage.getItem(id));
    if (retrievedStorage !== null) {
      return (stars = retrievedStorage.stars);
    } else return stars;
  };

  const checkStarred = () => {
    const retrievedStorage = JSON.parse(localStorage.getItem(id));
    if (retrievedStorage !== null) return true;
    else return false;
  };

  const handleAddToCart = (name, price, image) => {
    const cartPayload = {
      name: name,
      price: price,
      image: image,
    };
    addToCart(cartPayload);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/${name}`}>
          <img src={image} alt={name} />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant={'small'} onClick={event => handlePopup(event)}>
            QUICK VIEW
          </Button>
          <Button
            variant='small'
            onClick={event => {
              event.preventDefault();
              return handleAddToCart(name, price, image);
            }}
          >
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      {showPopup ? (
        <ProductPopup
          id={id}
          name={name}
          image={image}
          price={price}
          promo={promo}
          category={category}
          description={description}
          closePopup={handlePopup}
        />
      ) : (
        ''
      )}
      <div className={styles.content}>
        <Link to={`/product/${name}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          <ProductRating id={id} stars={checkStars()} isStarred={checkStarred()} />
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
};
ProductBox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  favourite: PropTypes.bool,
  compare: PropTypes.bool,
  addToFavourite: PropTypes.func,
  addToCompare: PropTypes.func,
  numberOfProductsToCompare: PropTypes.number,
  image: PropTypes.string,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
  addToCart: PropTypes.func,
};

export default ProductBox;
