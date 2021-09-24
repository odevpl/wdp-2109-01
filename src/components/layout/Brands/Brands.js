import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandsBox from '../../features/BrandsBox/BrandsBox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Swipeable from '../../common/Swipeable/Swipeable';

const Brands = ({ brands }) => {
  let [brand] = useState(6);
  const [activePage, setActivePage] = useState(0);

  const handleClickPrevious = event => {
    event.preventDefault();

    setActivePage(activePage === 0 ? brands.length / brand - 1 : activePage - 1);
  };

  const handleClickNext = event => {
    event.preventDefault();

    setActivePage(activePage === 0 ? brands.length / brand - 1 : activePage + 1);
  };

  const pagesCount = Math.ceil(brand.length);

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
      <div className={styles.root}>
        <Container className={styles.container}>
          <Grid container spacing={1} className={styles.grid}>
            <Button
              className={styles.button}
              variant='bigCarousel'
              onClick={handleClickPrevious}
            >
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>{' '}
            {brands.slice(activePage * brand, (activePage + 1) * brand).map(item => (
              <Grid key={item.id}>
                <BrandsBox {...item} />
              </Grid>
            ))}
            <Button
              className={styles.button}
              variant='bigCarousel'
              onClick={handleClickNext}
            >
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </Grid>
        </Container>
      </div>
    </Swipeable>
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
