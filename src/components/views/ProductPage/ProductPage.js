import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import {
  faExchangeAlt,
  faShoppingBasket,
  faMinus,
  faPlus,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ProductRating from './../../features/ProductRating/ProductRatingContainer';
import Button from './../../common/Button/Button';
import { Link } from 'react-router-dom';

class ProductPage extends React.Component {
  state = {
    id: null,
  };

  componentDidMount() {
    let id = this.props.match.params.productId;
    this.setState({
      id: id,
    });
  }

  render() {
    const id = this.state.id;
    const products = this.props.products;
    const product = products.filter(product => product.id === id);

    return (
      <div className={styles.root}>
        <Container className={styles.container}>
          {product.map(item => (
            <div key={item.id}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img src={item.image} alt={item.name} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        my: 1,
                        gap: 3,
                      }}
                    >
                      <h2>{item.name}</h2>
                      <Box>
                        <Button variant='small' className={styles.icon}>
                          <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
                        </Button>
                        <Button variant='small' className={styles.icon}>
                          <FontAwesomeIcon icon={faChevronRight}>Right</FontAwesomeIcon>
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} className={styles.break}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        my: 1,
                        gap: 3,
                      }}
                    >
                      <ProductRating id={item.id} stars={item.stars} />
                      <p>
                        (0 reviews) | <Link to='/'>Add your review</Link>
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={12} className={styles.break}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        my: 1,
                        gap: 3,
                      }}
                    >
                      <div className={styles.oldPrice}>
                        {item.oldPrice ? '$ ' + item.oldPrice : ''}
                      </div>
                      <Button noHover variant='small' className={styles.price}>
                        ${item.price}
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        my: 1,
                        gap: 3,
                      }}
                    >
                      <Button variant='small' className={styles.cart}>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD
                        TO CART
                      </Button>
                      <Button variant='small' className={styles.icon}>
                        <FontAwesomeIcon icon={faHeart}>Favourite</FontAwesomeIcon>
                      </Button>
                      <Button variant='small' className={styles.icon}>
                        <FontAwesomeIcon icon={faExchangeAlt}>
                          Add to compare
                        </FontAwesomeIcon>
                      </Button>
                      <Button variant='small' className={styles.icon}>
                        <FontAwesomeIcon icon={faEnvelope}>Send</FontAwesomeIcon>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} className={styles.break}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        my: 1,
                        gap: 5,
                      }}
                    >
                      <p className={styles.quantityText}>
                        <b>Quantity: </b>
                      </p>
                      <input
                        type='text'
                        id='quantity'
                        name='quantity'
                        defaultValue={item.quantity}
                        className={styles.quantityInput}
                      />
                      <Button variant='quantity' className={styles.icon}>
                        <FontAwesomeIcon icon={faMinus}>-</FontAwesomeIcon>
                      </Button>
                      <Button variant='quantity' className={styles.icon}>
                        <FontAwesomeIcon icon={faPlus}>-</FontAwesomeIcon>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} className={styles.break}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        my: 1,
                        gap: 3,
                      }}
                    >
                      <h4>Quick overview</h4>
                      <p>{item.description}</p>
                    </Box>
                  </Grid>
                  <Grid item xs={12} className={styles.break}>
                    <Box sx={{ my: 1, gap: 3 }}>
                      <p>
                        <b>Availability:</b> In stock
                      </p>
                      <p>
                        <b>Category:</b> {item.category}
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={12} className={styles.socialMedia}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        my: 1,
                        gap: 3,
                      }}
                    >
                      <ul>
                        <li>
                          <button>
                            <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                          </button>
                        </li>
                        <li>
                          <button>
                            <FontAwesomeIcon icon={faFacebookF}>
                              Facebook
                            </FontAwesomeIcon>
                          </button>
                        </li>
                        <li>
                          <button>
                            <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                          </button>
                        </li>
                        <li>
                          <button>
                            <FontAwesomeIcon icon={faGooglePlusG}>
                              Google Plus
                            </FontAwesomeIcon>
                          </button>
                        </li>
                        <li>
                          <button>
                            <FontAwesomeIcon icon={faLinkedinIn}>
                              LinkedIn
                            </FontAwesomeIcon>
                          </button>
                        </li>
                        <li>
                          <button>
                            <FontAwesomeIcon icon={faPinterestP}>
                              Pinterest
                            </FontAwesomeIcon>
                          </button>
                        </li>
                      </ul>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

ProductPage.propTypes = {
  products: PropTypes.array,
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      oldPrice: PropTypes.number,
      price: PropTypes.number,
      stars: PropTypes.number,
      quantity: PropTypes.number,
      description: PropTypes.string,
      category: PropTypes.string,
    })
  ),
  id: PropTypes.string,
  match: PropTypes.any,
};

export default ProductPage;
