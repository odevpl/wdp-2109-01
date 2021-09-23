import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import bedroom_bed from '../../common/images/imagesGallery/bedroom_bed.jpg';

const Promotions = () => (
  <section className={styles.root}>
    <div className='container'>
      <div className={'row ${styles.wrapper}'}>
        <div className={'col-6 ${styles.leftWrapper}'}>
          <div className={styles.imageWrapper}>
            <img src={bedroom_bed} width='120' height='180' />
          </div>
        </div>

        <div className={'col-6 ${styles.rightWrapper}'}>
          <div className={styles.imageWrapper}>
            <img src={bedroom_bed} width='120' height='180' />
          </div>
          <div className={styles.imageWrapper}>
            <img src={bedroom_bed} width='120' height='180' />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Promotions.propTypes = {};
// Promotions.defaultProps = {};

export default Promotions;
