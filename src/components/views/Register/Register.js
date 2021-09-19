import React from 'react';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Register = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className='row no-gutters justify-content-between'>
        <span>
          <div
            className={'row no-gutters justify-content-left col-6' + styles.inputBorder}
          >
            <input name='account' type='radio' value='fine' id='yes_account' />
            <label htmlFor='yes_account' />
            <h3>Mam konto</h3>
          </div>
        </span>
        <span>
          <div
            className={'row no-gutters justify-content-left col-6' + styles.inputBorder}
          >
            <input name='account' type='radio' value='miserable' id='no_account' />
            <label htmlFor='no_account' />
            <h3>Nie mam konta</h3>
          </div>
        </span>
      </div>

      <form className={styles.formWrapper}>
        <h4>Podaj dane do rejestracji</h4>

        <div className={styles.fields}>
          <div>
            <input
              className={styles.formBox}
              name='email'
              type='email'
              placeholder='E-mail *'
            ></input>
          </div>
          <div>
            <input
              className={styles.formBox}
              name='password'
              type='email'
              placeholder='Hasło *'
            ></input>
          </div>
          <div>
            <input
              className={styles.formBox}
              name='repeatPassword'
              type='password'
              placeholder='Powtórz hasło *'
            ></input>
          </div>
        </div>

        <div className={`row ${styles.switchCheckbox}`}>
          <label className={styles.switch}>
            <input type='checkbox' />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <label>
            <h5>Pokaż hasło</h5>
          </label>
        </div>

        <div className={styles.checkboxes}>
          <div className={styles.darkBox}>
            <label className={styles.checkbox}>
              <input type='checkbox'></input>
              Zaznacz wszystkie
            </label>
          </div>
          <div className={styles.lightBox}>
            <label className={styles.checkbox}>
              <input type='checkbox'></input>
              Akceptuję warunki <Link to='/'>regulaminu</Link>*
            </label>
          </div>
          <div className={styles.lightBox}>
            <label className={styles.checkbox}>
              <input type='checkbox'></input>
              Tak, tak! Chcę otrzymać JEŻowy newsletter
            </label>
          </div>
        </div>

        <div className='row no-gutters justify-content-between'>
          <Link to='/'>
            <button type='button' className={styles.backButton}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              <span>Wróć</span>
            </button>
          </Link>
          <Link to='/'>
            <button>Zarejestruj się</button>
          </Link>
        </div>
      </form>
    </div>
  </div>
);

export default Register;
