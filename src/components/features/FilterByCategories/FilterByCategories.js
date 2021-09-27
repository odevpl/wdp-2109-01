import React from 'react';
import styles from './FilterByCategories.module.scss';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FilterByCategories = () => (
  <div className={styles.root}>
    <div className={styles.byCategories}>
      <h4>FILTER BY CATEGORIES</h4>
      <div className='row'>
        <Button className={styles.buttonActive}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
        <div className={styles.activeCategory}>Furniture</div>
        <div className={styles.circleActive}>3</div>
      </div>

      <div className='row'>
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
        <div className={styles.category}>
          <h6>Sofa</h6>
        </div>
        <div className={styles.circle}>4</div>
      </div>

      <div className='row'>
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
        <div className={styles.category}>
          <h6>Chair</h6>
        </div>
        <div className={styles.circle}>5</div>
      </div>

      <div className='row'>
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
        <div className={styles.category}>
          <h6>Table</h6>
        </div>
        <div className={styles.circle}>5</div>
      </div>

      <div className='row'>
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
        <div className={styles.category}>
          <h6>Bedroom</h6>
        </div>
        <div className={styles.circle}>5</div>
      </div>

      <div className='row'>
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
        <div className={styles.category}>
          <h6>Furniture</h6>
        </div>
        <div className={styles.circle}>5</div>
      </div>
    </div>
  </div>
);

export default FilterByCategories;
