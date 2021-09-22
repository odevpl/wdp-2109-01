import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductCompare.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const ProductCompare = ({ products, removeFromCompare, removeAllFromCompare }) => {
  return products.length > 0 ? (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          {products.map(product => (
            <div key={product.id} className='col-sm-6 col-lg-3'>
              <h5>{product.name}</h5>
              <div className={styles.photo}>
                <div className={styles.actions}>
                  <Button
                    variant='close'
                    onClick={event => {
                      event.preventDefault();
                      return removeFromCompare(product.id);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={styles.icon}
                    ></FontAwesomeIcon>
                  </Button>
                </div>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col-1'>
            <Button variant='small'>Compare</Button>
          </div>
        </div>
      </div>
      <div className={styles.closeAll}>
        <Button
          variant='close'
          onClick={event => {
            event.preventDefault();
            return removeAllFromCompare();
          }}
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  ) : (
    ''
  );
};

ProductCompare.propTypes = {
  products: PropTypes.array,
  removeFromCompare: PropTypes.func,
  removeAllFromCompare: PropTypes.func,
};

export default ProductCompare;
