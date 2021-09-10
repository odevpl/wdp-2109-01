import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <Container className={styles.container}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  <li>
                    <a href='#'>About us</a>
                  </li>
                  <li>
                    <a href='#'>Policy</a>
                  </li>
                  <li>
                    <a href='#'>Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Online support</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>My account</h6>
                <ul>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>My cart</a>
                  </li>
                  <li>
                    <a href='#'>Wishlist</a>
                  </li>
                  <li>
                    <a href='#'>Checkout</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  <li>
                    <a href='#'>Specials</a>
                  </li>
                  <li>
                    <a href='#'>New products</a>
                  </li>
                  <li>
                    <a href='#'>Best Sellers</a>
                  </li>
                  <li>
                    <a href='#'>Out Stores</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>Orders</h6>
                <ul>
                  <li>
                    <a href='#'>Payment options</a>
                  </li>
                  <li>
                    <a href='#'>Shipping and delivery</a>
                  </li>
                  <li>
                    <a href='#'>Returns</a>
                  </li>
                  <li>
                    <a href='#'>Shipping</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={12} className={styles.images}>
              <img src='./images/cards.png' alt='Supported credit cards' />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <Container className={styles.containerTwo}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={4} className={styles.empty}></Grid>
          <Grid item xs={6} md={6} lg={4} className={styles.copyright}>
            <p>©Copyright 2016 Bazar | All Rights Reserved</p>
          </Grid>
          <Grid item xs={6} md={6} lg={4} className={styles.socialMedia}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
