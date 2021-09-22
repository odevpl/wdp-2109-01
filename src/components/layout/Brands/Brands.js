import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandsBox from '../../features/BrandsBox/BrandsBox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Brands = ({ brands }) => {
  const [brand] = useState(6);
  const [activePage, setActivePage] = useState(0);

  const handleClickPrevious = event => {
    event.preventDefault();

    setActivePage(activePage === 0 ? brands.length / brand - 1 : activePage - 1);
  };

  const handleClickNext = event => {
    event.preventDefault();

    setActivePage(activePage === 0 ? brands.length / brand - 1 : activePage + 1);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className='container'>
          <Container className={styles.container}>
            <Grid container spacing={1} className={styles.grid}>
              {/* <div className='row no-gutters justify-content-center'> */}
              {/* <div className={`col-1`}> */}
              <Grid item xs={1} md={1} lg={1}>
                <Button
                  className={styles.button}
                  variant='bigCarousel'
                  onClick={handleClickPrevious}
                >
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </Button>
                {/* </div> */}
              </Grid>
              {/* <div className='col-10'> */}
              <Grid container lg={10} direction='row'>
                {brands
                  .slice(activePage * brand, (activePage + 1) * brand)
                  .map(item => (
                    <Grid item key={item.id}>
                      <BrandsBox {...item} />
                    </Grid>
                  ))}
              </Grid>
              {/* </div> */}

              {/* <div className={`col-1`}> */}
              <Grid item xs={1} md={1} lg={1}>
                <Button
                  className={styles.button}
                  variant='bigCarousel'
                  onClick={handleClickNext}
                >
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </Button>
                {/* </div> */}
              </Grid>
              {/* </div> */}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
