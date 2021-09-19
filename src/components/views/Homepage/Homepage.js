import React from 'react';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

import Feedback from '../../features/Feedback/FeedbackContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';
import Promoted from '../../layout/Promoted/Promoted';
import Gallery from '../../layout/Gallery/GalleryContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';


const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promoted />
    <NewFurniture />
    <Feedback />
    <ProductCompare />
    <Gallery />
    <LatestBlog />

  </div>
);

export default Homepage;
