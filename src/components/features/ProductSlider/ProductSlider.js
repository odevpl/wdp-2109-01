import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import {
  faStar,
  faEye,
  faShoppingCart,
  faExchangeAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import ProductSliderBox from '../../common/ProductSliderBox/ProductSliderBox';
import chair from '../../common/images/imagesGallery/chair.jpg';
import ProductRating from '../ProductRating/ProductRatingContainer';

const ProductSlider = ({ products }) => {
  const [activePage] = useState(0);
  const [product] = useState(6);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={styles.heading}>
              <h3>FURNITURE GALLERY</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={'row ${styles.categoriesButtons}'}>
          <div className={'col-3 ${styles.categoryButton}'}>
            <Button variant='category'>FEATURED</Button>
          </div>
          <div className={'col-3 ${styles.categoryButton}'}>
            <Button variant='category'>TOP SELLER</Button>
          </div>
          <div className={'col-3 ${styles.categoryButton}'}>
            <Button variant='category'>SALE OFF</Button>
          </div>
          <div className={'col-3 ${styles.categoryButton}'}>
            <Button variant='category'>TOP RATED</Button>
          </div>
        </div>
      </div>

      <div className={styles.mainWrapper}>
        <div className={styles.imageWrapper}>
          <img src={chair} />
        </div>

        <div className={styles.smallMenuWrapper}>
          <div className={styles.actions}>
            <div className={styles.tooltipHover}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </Button>
              <div className={styles.tooltip}>Favourite</div>
            </div>

            <div className={styles.tooltipHover}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
              </Button>
              <div className={styles.tooltip}>Add to compare</div>
            </div>
            <div className={styles.tooltipHover}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </Button>
              <div className={styles.tooltip}>View more...</div>
            </div>
            <div className={styles.tooltipHover}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </Button>
              <div className={styles.tooltip}>Add to cart</div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h5>Aenean Ru Bristique</h5>

          <div className={styles.stars}>
            <ProductRating id={0} stars={2} />
          </div>
        </div>
        <div className={styles.priceCircle}>
          <div className={styles.priceLow}>$120.00</div>
          <div className={styles.priceBasic}>$160.00</div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className={`col-1`}>
            <Button className={styles.button} variant='carousel'>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div className='col-10'>
            <div className='row justify-content-between'>
              {products
                .slice(activePage * product, (activePage + 1) * product)
                .map(item => (
                  <div key={item.id} className='col-2'>
                    <ProductSliderBox {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className={`col-1`}>
            <Button className={styles.button} variant='carousel'>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
ProductSlider.defaultProps = {
  products: [],
};

export default ProductSlider;
