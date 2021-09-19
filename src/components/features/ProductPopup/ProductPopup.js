import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import styles from './ProductPopup.module.scss';

const ProductPopup = props => (
  <div className={styles.popup}>
    <div className={styles.popup_inner}>
      <div className='container'>
        <div className={styles.popupContainer}>
          <div className={styles.close}>
            <Button variant='close' onClick={props.closePopup}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button>
          </div>
          <div className='row'>
            <div className='col-5'>
              <div className={styles.photo}>
                <img src={props.image} alt={props.name} />
              </div>
            </div>
            <div className='col-6'>
              <div>
                <span>Name:</span> {props.name}
              </div>
              <div>
                <span>Category:</span> {props.category}
              </div>
              <div>
                <span>Promo:</span> {props.promo}
              </div>
              <div>
                <span>Price: </span>${props.price}
              </div>
              <div>
                <span>Description: </span>
                {props.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductPopup.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  closePopup: PropTypes.func,
};

export default ProductPopup;
