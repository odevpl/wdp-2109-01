import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <button type='button'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </button>
            </li>
            <li>
              <button type='button'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </button>
            </li>
            <li>
              <button type='button'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </button>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <button type='button'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
              </button>
            </li>
            <li>
              <button type='button'>
                <Link to='/register'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  Register
                </Link>
              </button>
            </li>
            <li>
              <button type='button'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
