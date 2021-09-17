import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './Promoted.module.scss';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';
import Button from '../../common/Button/Button';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-material-ui-carousel';

class Promoted extends React.Component {
  state = {
    activePageSmall: 1,
    activePageBig: 1,
    pagesCount: 3,
  };

  handlePageChangeSliderSM(newPage) {
    this.setState({ activePageSmall: newPage });
  }
  handlePageChangeSliderBG(newPage) {
    if (newPage >= 0 && newPage < this.state.pagesCount) {
      this.setState({ activePageBig: newPage });
    }
  }

  render() {
    const { activePageSmall, activePageBig, pagesCount } = this.state;
    const { promotions } = this.props;

    const promoProducts = [
      { ...promotions[5] },
      { ...promotions[10] },
      { ...promotions[17] },
    ];
    const promoProductsTwo = [
      { ...promotions[2] },
      { ...promotions[24] },
      { ...promotions[11] },
    ];

    /* Slider small actions */
    const rightAction = () => {
      const newPage = activePageSmall - 1;
      if (newPage >= 0) {
        this.setState({ activePageSmall: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePageSmall + 1;
      if (newPage < pagesCount) {
        this.setState({ activePageSmall: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          {/* eslint-disable-next-line */}
          <a
            onClick={() => this.handlePageChangeSliderSM(i)}
            className={i === activePageSmall && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftPage = activePageBig - 1;
    const rightPage = activePageBig + 1;

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
                <Carousel autoPlay='true' interval='2000' animation='fade'>
                  {promoProducts
                    .slice(activePageSmall, activePageSmall + 1)
                    .map(prom => (
                      <div key={prom.id}>
                        <Fade>
                          <PromotedProductBox {...prom} />
                        </Fade>
                      </div>
                    ))}
                </Carousel>
              </div>
              <div className={`col-8 ${styles.promotionWrapperRight}`}>
                {promoProductsTwo.slice(activePageBig, activePageBig + 1).map(prom => (
                  <div key={prom.id} className={styles.imgWrapper}>
                    <Fade>
                      <img src={prom.image} alt={123} />
                    </Fade>
                  </div>
                ))}
                <div className={styles.shadowWrapper}></div>
                <div className={styles.shadowTitle}>
                  INDOOR <span>FURNITURE</span>
                  <div className={styles.shadowSubtitle}>
                    SAVE UP TO 50% OF ALL FURNITURE
                  </div>
                </div>
                <div className={`col-8 ${styles.promotionWrapperRight}`}>
                  {promoProductsTwo.slice(activePageBig, activePageBig + 1).map(prom => (
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
                  <div className={`col-8 ${styles.promotionWrapperRight}`}>
                    {promoProductsTwo
                      .slice(activePageBig, activePageBig + 1)
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
            </div>
          </div>
        </section>
      </Swipeable>
    );
  }
}

Promoted.propTypes = {
  promotions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      isStarred: PropTypes.bool,
      oldPrice: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favoritue: PropTypes.bool,
      image: PropTypes.string,
      compare: PropTypes.bool,
    })
  ),
};

Promoted.defaultProps = {
  promotions: [],
};

export default Promoted;
