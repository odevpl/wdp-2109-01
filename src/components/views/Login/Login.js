import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';
import Container from '@material-ui/core/Container';

const Login = () => (
  <div className={styles.root}>
    <Container className={styles.container} maxWidth='lg'>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formBox}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={styles.formBox}>
            <label htmlFor='password'>Hasło</label>
            <input type='password' id='password' />
          </div>
          <p>
            Nie pamiętasz hasła? <a href='#'>Przypomnij hasło.</a>
          </p>
          <div className={styles.buttons}>
            <NavLink exact to={'/'} activeClassName='active'>
              <Button variant='login'>Zaloguj się</Button>
            </NavLink>
          </div>
        </form>
      </div>
    </Container>
  </div>
);

export default Login;
