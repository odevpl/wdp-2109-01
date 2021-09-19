import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <Container className={styles.container} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <FeatureBox icon={faTruck} active>
            <h5>Free shipping</h5>
            <p>All orders</p>
          </FeatureBox>
        </Grid>
        <Grid item xs={6} md={3}>
          <FeatureBox icon={faHeadphones}>
            <h5>24/7 customer</h5>
            <p>support</p>
          </FeatureBox>
        </Grid>
        <Grid item xs={6} md={3}>
          <FeatureBox icon={faReplyAll}>
            <h5>Money back</h5>
            <p>guarantee</p>
          </FeatureBox>
        </Grid>
        <Grid item xs={6} md={3}>
          <FeatureBox icon={faBullhorn}>
            <h5>Member discount</h5>
            <p>First order</p>
          </FeatureBox>
        </Grid>
      </Grid>
    </Container>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
