import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brand.module.scss';

const Brand = ({ name, image }) => {
  return (
    <div className={styles.photoBrands}>
      <img src={image} alt={name} />
    </div>
  );
};

Brand.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Brand;
