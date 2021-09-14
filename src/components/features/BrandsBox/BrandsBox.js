import React from 'react';
import PropTypes from 'prop-types';
import styles from '../BrandsBox/BrandsBox.module.scss';

const BrandsBox = ({ name, image }) => {
  return (
    <div className={styles.photoBrands}>
      <img src={image} alt={name} />
    </div>
  );
};

BrandsBox.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default BrandsBox;
