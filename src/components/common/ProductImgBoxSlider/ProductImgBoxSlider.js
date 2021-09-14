import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductImgBoxSlider.module.scss';

const ProductImgBoxSlider = ({ name, image }) => {
  return (
    <div className={styles.imageShadow}>
      <img src={image} alt={name} />
    </div>
  );
};

ProductImgBoxSlider.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ProductImgBoxSlider;
