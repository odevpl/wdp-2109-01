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
                    <button>About us</button>
                  </li>
                  <li>
                    <button>Policy</button>
                  </li>
                  <li>
                    <button>Conditions</button>
                  </li>
                  <li>
                    <button>Online support</button>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>My account</h6>
                <ul>
                  <li>
                    <button>Login</button>
                  </li>
                  <li>
                    <button>My cart</button>
                  </li>
                  <li>
                    <button>Wishlist</button>
                  </li>
                  <li>
                    <button>Checkout</button>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  <li>
                    <button>Specials</button>
                  </li>
                  <li>
                    <button>New products</button>
                  </li>
                  <li>
                    <button>Best Sellers</button>
                  </li>
                  <li>
                    <button>Out Stores</button>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={styles.menuWrapper}>
                <h6>Orders</h6>
                <ul>
                  <li>
                    <button>Payment options</button>
                  </li>
                  <li>
                    <button>Shipping and delivery</button>
                  </li>
                  <li>
                    <button>Returns</button>
                  </li>
                  <li>
                    <button>Shipping</button>
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
                <button>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </button>
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
