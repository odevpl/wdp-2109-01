import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
//import { NavLink } from 'react-router-dom';
import styles from './Cart.module.scss';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ products }) => {
  return (
    <div className={styles.root}>
      <Container className={styles.container} maxWidth='lg'>
        <h5>Your cart</h5>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.productId}>
                <td>
                  <div>{product.name}</div>
                  <div className={styles.photo}>
                    <img src={product.image} alt={product.name} />
                  </div>
                </td>
                <td>
                  <Button variant='quantity'>
                    <FontAwesomeIcon icon={faMinus}>-</FontAwesomeIcon>
                  </Button>
                  <input
                    type='text'
                    id='quantity'
                    name='quantity'
                    defaultValue={product.quantity}
                  />
                  <Button variant='quantity'>
                    <FontAwesomeIcon icon={faPlus}>+</FontAwesomeIcon>
                  </Button>
                </td>
                <td>${product.price}</td>
                <td>
                  <Button variant='trash'>
                    <FontAwesomeIcon icon={faTrashAlt}>Remove</FontAwesomeIcon>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.cartSummary}>Total: $90</div>
        <div className={styles.checkout}>
          {/* <NavLink exact to={'/'} activeClassName='active'> */}
          <button variant='small'>PROCEED TO CHECKOUT</button>
          {/* </NavLink> */}
        </div>
      </Container>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
};

export default Cart;
