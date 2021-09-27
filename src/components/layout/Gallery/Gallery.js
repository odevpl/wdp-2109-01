import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from './../../common/Button/Button';
import ProductSlider from '../../features/ProductSlider/ProductSliderContainer';
import bedroom_bed from '../../common/images/imagesGallery/bedroom_bed.jpg';
import Grid from '@material-ui/core/Grid';
import Swipeable from '../../common/Swipeable/Swipeable';

class Gallery extends React.Component {
  state = {
    activePage: 0,
    pagesCount: 6,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { activePage } = this.state;

    const pagesCount = 6;

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <section className={styles.root}>
          <Grid container spacing={3} className={styles.container}>
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
          </Grid>
        </section>
      </Swipeable>
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
