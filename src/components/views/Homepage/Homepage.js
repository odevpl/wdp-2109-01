import React from 'react';
import styles from './Homepage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';
import Gallery from '../../layout/Gallery/Gallery';

const Homepage = () => (
  <div className={styles.root}>
    <NewFurniture />
    <Gallery />
    <Feedback />
    <ProductCompare />
  </div>
);

export default Homepage;
