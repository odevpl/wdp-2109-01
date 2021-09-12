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
                <img
                  src={
                    'https://www.pexels.com/pl-pl/zdjecie/pomaranczowa-skorzana-sofa-2-osobowa-przy-scianie-1866149/'
                  }
                />
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
  children: PropTypes.string,
};

export default Gallery;
