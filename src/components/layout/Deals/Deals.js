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
          <div className={styles.greyBox}>
            <div className={styles.priceTitle}>
              GUEST ROOM
              <br />
              <span>SOFA</span>
              <br />
              <p>-20%</p>
            </div>
            <div className={styles.priceSubtitle}>Bedroom bed</div>
          </div>
        </div>

        <div className={`col-6 ${styles.wrapperLarge}`}>
          <div className={`row pb-4 ${styles.wrapperSmall}`}>
            <img src={Chair} className={styles.imgChair} alt='Bed' />
            <div className={styles.priceTitleTwo}>
              <h4>
                <span>OFFICE</span>CHAIR
              </h4>
              <h5>COLLECTION</h5>
              <p>$200.00</p>
            </div>
          </div>
          <div className={`row ${styles.wrapperSmall}`}>
            <img src={Bed} className={styles.imgBed} alt='Chair' />
            <div className={styles.priceTitleThree}>
              <h4>
                <span>SPECIAL</span>COLLECTION
              </h4>
              <h5>SAVE UP 45% OF FURNITURE</h5>
            </div>
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

export default Deals;
