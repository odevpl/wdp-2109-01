import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from './../../common/Button/Button';
<<<<<<< HEAD
import ProductSlider from '../../features/ProductSlider/ProductSliderContainer';
import bedroom_bed from '../../common/images/imagesGallery/bedroom_bed.jpg';
=======
import ProductSlider from '../../common/ProductSlider/ProductSliderContainer';
>>>>>>> 259ae63 (Add component Gallery problems with photos)

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
<<<<<<< HEAD
                <img src={bedroom_bed} width='120' height='180' />
=======
                <img src='../../images/imagesGallery/chair-1.jpg' alt='' />
>>>>>>> 259ae63 (Add component Gallery problems with photos)
                <div className={styles.priceTitle}>
                  FROM<span>$50.80</span>
                </div>
                <div className={styles.priceSubtitle}>Bedroom bed</div>
                <div className={styles.greenButton}>
<<<<<<< HEAD
                  <Button variant='greenButton'>SHOP NOW</Button>
=======
                  <Button variant='bigGreenButton'>SHOP NOW</Button>
>>>>>>> 259ae63 (Add component Gallery problems with photos)
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
