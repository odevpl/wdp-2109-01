import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BrandsBox.module.scss';
import Button from './../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Brand from '../Brands/Brand';

const BrandsBox = ({ brands }) => {
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
      <div className='container'>
        <div className={'row no-gutters justify-content-between' + styles.brands}>
          <div className='col-1'>
            <Button
              className={styles.button}
              variant='carousel'
              onClick={handleClickPrevious}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
          </div>
          <div className={'col-10' + styles.photoBrands}>
            {brands.slice(activePage * 6, (activePage + 1) * 6).map(item => (
              <div key={item.id} className='col-2'>
                <Brand {...item} />
              </div>
            ))}
          </div>
          <div className='col-1'>
            <Button
              className={styles.button}
              variant='carousel'
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

BrandsBox.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

BrandsBox.defaultProps = {
  brands: [],
};

export default BrandsBox;
