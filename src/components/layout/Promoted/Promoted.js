import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';
import Button from '../../common/Button/Button';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-material-ui-carousel';

// import reducer from '../../../redux/productsRedux';

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
    // const rightAction = () => {
    //   const newPage = activePageSmall - 1;
    //   if (newPage >= 0) {
    //     this.setState({ activePageSmall: newPage });
    //   }
    // };

    // const leftAction = () => {
    //   const newPage = activePageSmall + 1;
    //   if (newPage < pagesCount) {
    //     this.setState({ activePageSmall: newPage });
    //   }
    // };

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
      <section className={styles.root}>
        <div className='container'>
          <div className={'row'}>
            <div className={`col-4 ${styles.promotionWrapperLeft}`}>
              {/* <Swipeable leftAction={leftAction} rightAction={rightAction}> */}
              <div className={styles.panelBar}>
                {/* <div className='row justify-content-center'> */}
                <div className={`${styles.title}`}>
                  <h5>HOT DEALS</h5>
                  <div className={`${styles.dots}`}>
                    <ul>{dots}</ul>
                  </div>
                  {/* <div className="Carousel-indicators-2">
                    <button className="MuiButtonBase-root MuiIconButton-root Carousel-indicator-3
                      MuiIconButton-sizeSmall" tabIndex="0" type="button" aria-label="carousel indicator 1" style={{ color: '#e1e1e1' }}>
                      <span className="MuiIconButton-label">
                        <svg className="MuiSvgIcon-root Carousel-indicatorIcon-4"
                          focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{
                            fontSize: 20,
                          }}>
                          <circle cx="12" cy="12" r="8"></circle>
                        </svg>
                      </span>
                      <span className="MuiTouchRipple-root">
                      </span>
                    </button>
                    <button className="MuiButtonBase-root MuiIconButton-root Carousel-indicator-3  Carousel-active-5  MuiIconButton-sizeSmall"
                      tabIndex="0" type="button" aria-label="carousel indicator 2" style={{
                        color: '#D58E32',
                        fontSize: 18,
                      }}>
                      <span className="MuiIconButton-label">
                        <svg className="MuiSvgIcon-root Carousel-indicatorIcon-4"
                          focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{
                            fontSize: 20,
                          }}>
                          <circle cx="12" cy="12" r="8">
                          </circle>
                        </svg>
                      </span>
                      <span
                        className="MuiTouchRipple-root">
                      </span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiIconButton-root Carousel-indicator-3  MuiIconButton-sizeSmall"
                      tabIndex="0" type="button" aria-label="carousel indicator 3" style={{ color: '#e1e1e1' }}>
                      <span className="MuiIconButton-label">
                        <svg className="MuiSvgIcon-root Carousel-indicatorIcon-4" focusable="false" viewBox="0 0 24 24"
                          aria-hidden="true" style={{
                            fontSize: 20,
                          }}>
                          <circle cx="12" cy="12" r="8">
                          </circle>
                        </svg>
                      </span>
                      <span className="MuiTouchRipple-root">
                      </span>
                    </button>
                  </div> */}
                </div>
                <Carousel
                  autoPlay={true}
                  interval='3000'
                  animation='fade'
                  navButtonsProps={{
                    style: {
                      display: 'none',
                    },
                  }}
                  activeIndicatorIconButtonProps={{
                    style: {
                      color: '#D58E32',
                    },
                  }}
                  indicatorIconButtonProps={{
                    style: {
                      // display: 'none',
                      // color: 'red',
                    },
                  }}
                >
                  {promoProducts.map(prom => (
                    <PromotedProductBox key={prom.id} {...prom} />
                  ))}
                </Carousel>
                {/* </div> */}
              </div>

              {/* </div> */}

              {/* {promoProducts
                  .slice(activePageSmall, activePageSmall + 1)
                  .map(prom => (

                    <div key={prom.id}>
                      <Fade>
                        <PromotedProductBox {...prom} />
                      </Fade>
                    </div>

                  ))} */}

              {/* </Swipeable> */}
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
              <div className={styles.mainButton}>
                <Button variant='white'>SHOP NOW</Button>
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
        </div>
      </section>
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
