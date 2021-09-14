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
  favoritue,
  addToFavoritue,
  isStarred,
}) => {
  const choseClassName = btnType => {
    if (btnType === 'favourite' && name === 'Aenean Ru Bristique 1') {
      return 'favoritue';
    }
    if (btnType === 'compare' && name === 'Aenean Ru Bristique 4') {
      return 'favoritue';
    }
    if (name === 'Aenean Ru Bristique 2') return 'favoritue';
  };

  return (
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
            className={choseClassName('favourite')}
            variant={favoritue ? 'favoritue' : 'outline'}
            onClick={event => {
              event.preventDefault();
              return addToFavoritue(id);
            }}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={choseClassName('compare')}>
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
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  favoritue: PropTypes.bool,
  addToFavoritue: PropTypes.func,
  image: PropTypes.string,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
};

export default ProductBox;
