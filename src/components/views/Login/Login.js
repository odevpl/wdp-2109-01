import React from 'react';
//import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';
import Container from '@material-ui/core/Container';

const Login = () => {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleCLickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const validation = event => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const alertWrapper = document.querySelector('.alertWrapper');
    const wrongAnswer = document.getElementById('wrongAnswer');

    if (wrongAnswer) wrongAnswer.remove();

    if (email === 'admin') {
      if (password === 'pass') {
        document.location = `${process.env.PUBLIC_URL}/`;
      } else {
        if (wrongAnswer) {
          wrongAnswer.remove();
        }
        alertWrapper.insertAdjacentHTML(
          'afterbegin',
          "<span id='wrongAnswer'>Hasło jest błędne!</span>"
        );
      }
    } else {
      alertWrapper.insertAdjacentHTML(
        'afterbegin',
        "<span id='wrongAnswer'>E-mail jest błędny!</span>"
      );
    }
  };

  const handleLogIn = event => {
    event.preventDefault();
    validation();
  };

  return (
    <div className={styles.root}>
      <Container className={styles.container} maxWidth='lg'>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formBox}>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' name='email' />
            </div>
            <div className={styles.formBox}>
              <label htmlFor='password'>Hasło</label>
              <input
                type={values.showPassword ? 'text' : 'password'}
                id='password'
                name='password'
              />
            </div>
            <div className='row'>
              <p>
                Nie pamiętasz hasła? <a href='#'>Przypomnij hasło.</a>
              </p>
              <div className={`row ${styles.switchCheckbox}`}>
                <label className={styles.switch}>
                  <input type='checkbox' onClick={handleCLickShowPassword} />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
                <label>
                  <h6>Pokaż hasło</h6>
                </label>
              </div>
            </div>
            <div className={styles.buttons + ' alertWrapper'}>
              <NavLink exact to={'/'} activeClassName='active'>
                <Button variant='login' onClick={handleLogIn}>
                  Zaloguj się
                </Button>
              </NavLink>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
