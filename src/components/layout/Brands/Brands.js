import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandsBox from '../../features/BrandsBox/BrandsBox';

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
      <div className='container col-12 justify-content-between'>
        <div className={'row no-gutters justify-content-between ' + styles.brands}>
          <div className='row no-gutters justify-content-between col-1'>
            <Button
              className={styles.button}
              variant='bigCarousel'
              onClick={handleClickPrevious}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
          </div>
          <div className='row no-gutters justify-content-between col-10 '>
            {brands.slice(activePage * 6, (activePage + 1) * 6).map(item => (
              <div key={item.id} className='col-2'>
                <BrandsBox {...item} />
              </div>
            ))}
          </div>
          <div className='row no-gutters justify-content-between col-1'>
            <Button
              className={styles.button}
              variant='bigCarousel'
              onClick={handleClickNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
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
