import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductImgBox.module.scss';

const ProductImgBox = ({ name, image }) => {
  return (
    <div className={styles.imageShadow}>
      <img src={image} alt={name} />
    </div>
  );
};

ProductImgBox.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ProductImgBox;
