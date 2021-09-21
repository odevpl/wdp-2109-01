import React from 'react';
import styles from './BlogArchive.module.scss';
import { post_1 } from './../../common/images/ImagesBlog/post_1.jpg';
import { post_2 } from './../../common/images/ImagesBlog/post_2.jpg';
import { post_3 } from './../../common/images/ImagesBlog/post_3.jpg';
import { post_4 } from './../../common/images/ImagesBlog/post_4.jpg';
import { post_5 } from './../../common/images/ImagesBlog/post_5.jpg';

const BlogArchive = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <h3>ARCHIVES</h3>
      <div className={`col-9 no-gutters justify-content-between  ${styles.article}`}>
        <div className={styles.post}>
          <h4>
            Post 1 <span>Witamy na nowej stronie sklepu</span>
          </h4>
          <img src={post_1} />
          <div>
            <p></p>
          </div>
        </div>
        <div className={styles.post}>
          <h4>
            Post 2<span>Poszukaj inspiracji dla swojego wnętrza</span>
          </h4>
          <img src={post_2} />
          <div>
            <p></p>
          </div>
        </div>
        <div className={styles.post}>
          <h4>
            Post 3<span>Porady naszych specjalistów cz.1 SALON</span>
          </h4>
          <img src={post_3} />
          <div>
            <p></p>
          </div>
        </div>
        <div className={styles.post}>
          <h4>
            Post 4<span>Nasze nowości na Targach Meble Polska</span>
          </h4>
          <img src={post_4} />
          <div>
            <p></p>
          </div>
        </div>
        <div className={styles.post}>
          <h4>
            Post 5<span>Stwórz swój mikrokosmos</span>
          </h4>
          <img src={post_5} />
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <div className={`col-3 no-gutters justify-content-between ${styles.menuBlog}`}>
        <div className={styles.search}>
          <h5>Recent Posts</h5>
          <input type='text' placeholder='Search...'></input>
        </div>
        <div className={styles.recentPosts}>
          <ul>
            <li>Post 5</li>
            <li>Post 3</li>
            <li>Post 2</li>
            <li>Post 1</li>
          </ul>
        </div>
        <div className={styles.comments}>
          <h5>Recent Comments</h5>
        </div>
        <div className={styles.archives}>
          <h5>Archives</h5>
          June 2015
        </div>
        <div className={styles.categories}>
          <h5>Categories</h5>
          Just usual
        </div>
        <div className={styles.meta}>
          <h5>Meta</h5>
        </div>
      </div>
    </div>
  </div>
);

export default BlogArchive;
