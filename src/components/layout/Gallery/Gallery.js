import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from './../../common/Button/Button';
import ProductSlider from '../../features/ProductSlider/ProductSliderContainer';
import bedroom_bed from '../../common/images/imagesGallery/bedroom_bed.jpg';
import Grid from '@material-ui/core/Grid';

class Gallery extends React.Component {
  render() {
    return (
      <section className={styles.root}>
        {/* <div className='container'> */}
        <Grid container spacing={3} className={styles.container}>
          {/* <div className={styles.wrapper}> */}
          <Grid item xs={12} md={6} lg={6}>
            <div className={styles.leftWrapper}>
              <ProductSlider />
            </div>
          </Grid>
          <Grid item className={styles.rightGrid} md={6} lg={6}>
            <div className={styles.rightWrapper}>
              <div className={styles.imageWrapper}>
                <img src={bedroom_bed} width='120' height='180' alt='haba' />
                <div className={styles.priceTitle}>
                  FROM<span>$50.80</span>
                </div>
                <div className={styles.priceSubtitle}>Bedroom bed</div>
                <div className={styles.greenButton}>
                  <Button variant='greenButton'>SHOP NOW</Button>
                </div>
              </div>
            </div>
          </Grid>
          {/* </div> */}
        </Grid>
        {/* </div> */}
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
