import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import ProductPopup from '../../features/ProductPopup/ProductPopup';

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

  const checkFavs = id => {
    const retrievedStorage = JSON.parse(localStorage.getItem('favs'));
    if (retrievedStorage !== null) {
      retrievedStorage.filter(item => {
        if (item.id === id) favourite = item.favourite;
        return favourite;
      });
    }
    return favourite;
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant={'small'} onClick={event => handlePopup(event)}>
            QUICK VIEW
          </Button>
          <Button variant='small'>
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
        <h5>{name}</h5>
        <div className={styles.stars}>
          <ProductRating id={id} stars={checkStars()} isStarred={checkStarred()} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={checkFavs(id) ? 'favourite' : 'outline'}
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
};

export default ProductBox;
