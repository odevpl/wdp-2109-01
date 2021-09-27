import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import styles from './AlertPopup.module.scss';

const AlertPopup = props => (
  <div className={styles.popup}>
    <div className={styles.popup_inner}>
      <div className={styles.close}>
        <Button variant='close' onClick={props.closePopup}>
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.popup_row}>
        <span>You can only add up to 4 items to compare!</span>
      </div>
    </div>
  </div>
);

AlertPopup.propTypes = {
  closePopup: PropTypes.func,
};

export default AlertPopup;
