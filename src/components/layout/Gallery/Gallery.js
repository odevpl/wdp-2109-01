import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from './../../common/Button/Button';
import ProductSlider from '../../common/ProductSlider/ProductSliderContainer';
import bedroom_bed from '../../common/images/imagesGallery/bedroom_bed.jpg';

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
                <img src={bedroom_bed} width='120' height='200' />
                <div className={styles.priceTitle}>
                  FROM<span>$50.80</span>
                </div>
                <div className={styles.priceSubtitle}>Bedroom bed</div>
                <div className={styles.greenButton}>
                  <Button variant='greenButton'>SHOP NOW</Button>
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
      image: PropTypes.string,
    })
  ),
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
