import React from 'react';
import styles from './Promoted.module.scss';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import Button from '../../common/Button/Button';
import initialState from '../../../redux/initialState';
import Swipeable from '../../common/Swipeable/Swipeable';

class Promoted extends React.Component {
  state = {
    activePage: 1,
    pagesCount: 3,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { pagesCount, activePage } = this.state;

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

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <section className={styles.root}>
          <div className='container-lg'>
            <div className={'row'}>
              <div
                className={`col-lg-4 d-none d-lg-block ${styles.promotionWrapperLeft}`}
              >
                <div className={styles.panelBar}>
                  <div className='row justify-content-between'>
                    <div className={`col-5 ${styles.title}`}>HOT DEALS</div>
                    <div className={`col-5 ${styles.dots}`}>
                      <ul>{dots}</ul>
                    </div>
                  </div>
                </div>
                <PromotedProductBox {...initialState.products[15]} />
              </div>

              <div className={`col-12 col-lg-8 ${styles.promotionWrapperRight}`}>
                <div className={styles.imgWrapper}>
                  <img src={initialState.products[20].image} alt={123} />
                </div>
                <div className={styles.shadowWrapper}></div>
                <div className={styles.shadowTitle}>
                  INDOOR <span>FURNITURE</span>
                  <div className={styles.shadowSubtitle}>
                    SAVE UP TO 50% OF ALL FURNITURE
                  </div>
                </div>
                <div className={styles.mainButton}>
                  <Button variant='white'>SHOP NOW</Button>
                </div>
                <div className={styles.buttonsWrapper}>
                  <div className='row'>
                    <div className={`col-6 ${styles.button}`}>
                      <Button variant='long'>{'<'}</Button>
                    </div>
                    <div className={`col-6 ${styles.button}`}>
                      <Button variant='long'>{'>'}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Swipeable>
    );
  }
}

export default Promoted;
