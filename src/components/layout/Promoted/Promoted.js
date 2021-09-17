import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './Promoted.module.scss';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';
import Button from '../../common/Button/Button';
import initialState from '../../../redux/initialState';
import Fade from 'react-reveal/Fade';

class Promoted extends React.Component {
  state = {
    sliderSMactivePage: 1,
    sliderBGactivePage: 1,
    pagesCount: 3,
  };

  handlePageChangeSliderSM(newPage) {
    this.setState({ sliderSMactivePage: newPage });
  }
  handlePageChangeSliderBG(newPage) {
    this.setState({ sliderBGactivePage: newPage });
  }

  render() {
    const { sliderSMactivePage, sliderBGactivePage } = this.state;

    const promoProducts = [
      { ...initialState.products[5] },
      { ...initialState.products[10] },
      { ...initialState.products[17] },
    ];
    const promoProductsTwo = [
      { ...initialState.products[2] },
      { ...initialState.products[8] },
      { ...initialState.products[11] },
    ];
    /* eslint no-console: ["error", { allow: ["log"] }] */
    // console.log(promoProducts);
    const pagesCount = Math.ceil(promoProducts.length);

    const rightAction = () => {
      const newPage = sliderSMactivePage - 1;
      if (newPage >= 0) {
        this.setState({ sliderSMactivePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = sliderSMactivePage + 1;
      if (newPage < pagesCount) {
        this.setState({ sliderSMactivePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          {/* eslint-disable-next-line */}
          <a
            onClick={() => this.handlePageChangeSliderSM(i)}
            className={i === sliderSMactivePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    const leftPage = sliderBGactivePage - 1;
    const rightPage = sliderBGactivePage + 1;
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
                {promoProducts
                  .slice(sliderSMactivePage, sliderSMactivePage + 1)
                  .map(prom => (
                    <div key={prom.id}>
                      <Fade>
                        <PromotedProductBox {...prom} />
                      </Fade>
                    </div>
                  ))}
              </div>
              <div className={`col-8 ${styles.promotionWrapperRight}`}>
                {promoProductsTwo
                  .slice(sliderBGactivePage, sliderBGactivePage + 1)
                  .map(prom => (
                    <div key={prom.id} className={styles.imgWrapper}>
                      <img src={prom.image} alt={123} />
                    </div>
                  ))}
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
                      <Button
                        variant='long'
                        onClick={e =>
                          e.preventDefault() & this.handlePageChangeSliderBG(leftPage)
                        }
                      >
                        {'<'}
                      </Button>
                    </div>
                    <div className={`col-6 ${styles.button}`}>
                      <Button
                        variant='long'
                        onClick={e =>
                          e.preventDefault() & this.handlePageChangeSliderBG(rightPage)
                        }
                      >
                        {'>'}
                      </Button>
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

Promoted.propTypes = {
  promotions: PropTypes.node,
};

Promoted.defaultProps = {
  promotions: [],
};

export default Promoted;
