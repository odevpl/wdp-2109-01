import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deals.module.scss';
import Bed from '../../common/images/imagesDeals/deals-bed.jpg';
import Chair from '../../common/images/imagesDeals/deals-chair.jpg';
import Large from '../../common/images/imagesDeals/deals-large.jpg';

const Deals = () => (
  <section className={styles.root}>
    <div className='container'>
      <div className={'row ${styles.wrapper}'}>
        <div className={`col-6 ${styles.wrapperLarge}`}>
          <img src={Large} className={styles.imgLarge} alt='Large' />
        </div>

        <div className={`col-6 ${styles.wrapperLarge}`}>
          <div className={`row pb-4 ${styles.wrapperSmall}`}>
            <img src={Chair} className={styles.imgChair} alt='Bed' />
          </div>
          <div className={`row ${styles.wrapperSmall}`}>
            <img src={Bed} className={styles.imgBed} alt='Chair' />
          </div>
        </div>
      </div>
    </div>
  </section>
);

Deals.propTypes = {
  Bed: PropTypes.node,
  Chair: PropTypes.node,
  Large: PropTypes.node,
};

// Deals.defaultProps = {};

export default Deals;
