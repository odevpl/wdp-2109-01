import React from 'react';
import styles from './ProductReview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ProductReview extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              <div className={styles.item}>description</div>
              <div className={styles.item}>reviews(0)</div>
              <div className={styles.item}>specification</div>
              <div className={styles.item}>custom tab</div>
            </ul>
            <div className={styles.rating}>
              <p>There are no reviews on this product</p>
              <span>Bad</span>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(star => {
                  return (
                    <a key={star} href='/'>
                      <label>
                        <FontAwesomeIcon className={styles.star} icon={faStar}>
                          {star} stars
                        </FontAwesomeIcon>
                      </label>
                    </a>
                  );
                })}
              </div>
              <span>Good</span>
              <Link className={styles.buttonAdd}> Add a review </Link>
              <p className={styles.ratingText}>Your Rating</p>
            </div>

            <form className={styles.form}>
              <label htmlFor='more'> Your Review </label>
              <textarea
                className={styles.textarea}
                id='more'
                name='more'
                rows='5'
                placeholder=''
              />
              <div className={styles.inputs}>
                <input type='text' placeholder='Name*' />
                <input type='email' placeholder='Email*' />
                <button className={styles.continue}>Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReview;
