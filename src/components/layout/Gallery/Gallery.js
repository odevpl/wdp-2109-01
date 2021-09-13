import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from './../../common/Button/Button';
import ProductSlider from '../../common/ProductSlider/ProductSliderContainer';

class Gallery extends React.Component {
  render() {
    return (
      <section className={styles.root}>
        <div className='container'>
          <div className={'row ${styles.wrapper}'}>
            <div className={'col-6 ${styles.leftWrapper}'}>
              <ProductSlider />
            </div>

            <div className={'col-6 ${styles.rightWrapper}'}>
              <div className={styles.imageWrapper}>
                <img src='../../images/imagesGallery/chair-1.jpg' alt='' />
                <div className={styles.priceTitle}>
                  FROM<span>$50.80</span>
                </div>
                <div className={styles.priceSubtitle}>Bedroom bed</div>
                <div className={styles.greenButton}>
                  <Button variant='bigGreenButton'>SHOP NOW</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
