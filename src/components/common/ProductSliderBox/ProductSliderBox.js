import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductSliderBox.module.scss';

const ProductSliderBox = ({ name, image }) => {
  return (
    <div className={styles.imageShadow}>
      <img src={image} alt={name} />
    </div>
  );
};

ProductSliderBox.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ProductSliderBox;
