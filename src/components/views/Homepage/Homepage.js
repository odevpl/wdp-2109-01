import React from 'react';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';
import Promoted from '../../layout/Promoted/PromotedContainer';
import Deals from '../../layout/Deals/Deals';
import ChatBot from '../../features/ChatBot/ChatBot';
import Gallery from '../../layout/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promoted />
    <Deals />
    <NewFurniture tileNumber={8} />
    <Gallery />
    <LatestBlog />
    <Brands />
    <Feedback />
    <ProductCompare />
    <ChatBot />
<<<<<<< HEAD
=======
    <Gallery />
<<<<<<< HEAD
    <LatestBlog />
<<<<<<< HEAD
>>>>>>> 5337061 (Add slider functionality)

=======
>>>>>>> 3b5a042 (Add slider functionality)
=======
>>>>>>> 9d349f5 (Add small slider correct)
  </div>
);

export default Homepage;
