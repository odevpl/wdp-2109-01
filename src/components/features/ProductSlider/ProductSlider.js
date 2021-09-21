import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import {
  faEye,
  faShoppingCart,
  faExchangeAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ProductSliderBox from '../../common/ProductSliderBox/ProductSliderBox';
import chair from '../../common/images/imagesGallery/chair.jpg';
import ProductRating from '../ProductRating/ProductRatingContainer';

class ProductSlider extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'featured',
    fade: 'incategory',
    activeProduct: '',
    visibleProducts: 6, // the amount of visible product (small images) in slider. This to be changed for narrow window size.
  };

  handlePageChange(direction, maxPages) {
    switch (direction) {
      case 'left':
        if (this.state.activePage > 0)
          this.setState({ activePage: this.state.activePage - 1 });
        break;
      case 'right':
        if (this.state.activePage < maxPages)
          this.setState({ activePage: this.state.activePage + 1 });
        break;
      default:
        break;
    }
  }

  handleCategoryChange(newCategory) {
    const { categoryProducts, categories, firstElementId } = this.getCategoryProducts(
      newCategory
    );
    this.setState({
      activeCategory: newCategory,
      activePage: 0,
      activeProduct: firstElementId,
    });
    this.handleFadeChange('in', 'category');
  }

  handleProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
    this.handleFadeChange('in', 'product');
  }

  handleFadeChange(newFade, fromWho) {
    this.setState({ fade: newFade + fromWho });
  }
  getFade(fromWho) {
    switch (this.state.fade) {
      case 'inproduct':
        return fromWho === 'img' ? styles.fadeIn : styles.fadeIn;
      case 'outproduct':
        return fromWho === 'img' ? styles.fadeOut : styles.fadeIn;
      case 'incategory':
        return fromWho === 'img' ? styles.fadeIn : styles.fadeIn;
      case 'outcategory':
        return fromWho === 'img' ? styles.fadeOut : styles.fadeOut;
      default:
        break;
    }
  }

  getCategoryProducts(requestedCategory) {
    const { products } = this.props;
    const categories = [
      { id: 'featured', name: 'FEATURED' },
      { id: 'topSeller', name: 'TOP SELLER' },
      { id: 'saleOff', name: 'SALE OFF' },
      { id: 'topRated', name: 'TOP RATED' },
    ];

    const categoryProducts = [];
    let maxStarValue = 0;
    switch (requestedCategory) {
      case categories[1].id:
        categoryProducts.push(...products.filter(item => item.topSeller === true));
        break;
      case categories[2].id:
        categoryProducts.push(...products.filter(item => item.promo === 'sale'));
        break;
      case categories[3].id:
        for (let product of products) {
          if (product.stars > maxStarValue) {
            maxStarValue = product.stars;
            while (categoryProducts.length) {
              categoryProducts.pop();
            }
          }
          if (product.stars === maxStarValue) {
            categoryProducts.push(product);
          }
        }
        break;
      default:
        for (let product of products) {
          categoryProducts.push(product);
        }
    }
    const firstElementId = categoryProducts.length ? categoryProducts[0].id : '';
    return { categoryProducts, categories, firstElementId };
  }

  render() {
    const { categoryProducts, categories, firstElementId } = this.getCategoryProducts(
      this.state.activeCategory
    );
    if (firstElementId !== '' && this.state.activeProduct === '')
      this.state.activeProduct = firstElementId;

    const pagesCount =
      Math.ceil(categoryProducts.length / this.state.visibleProducts) - 1;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={styles.heading}>
                <h3>FURNITURE GALLERY</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className={'row ' + styles.categoriesButtons}>
            {categories.map(item => (
              <div key={item.id} className='col-3'>
                <Button
                  variant='category'
                  className={
                    item.id === this.state.activeCategory ? styles.buttonActive : ''
                  }
                  onClick={event => {
                    event.preventDefault();
                    this.handleFadeChange('out', 'category');
                    setTimeout(() => {
                      this.handleCategoryChange(item.id);
                    }, 700);
                  }}
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mainWrapper}>
          <div className={styles.imageWrapper + ' ' + this.getFade('img')}>
            <img
              src={
                this.state.activeProduct !== ''
                  ? categoryProducts.find(item => item.id === this.state.activeProduct)
                      .image
                  : chair
              }
            />
          </div>

          <div className={styles.smallMenuWrapper}>
            <div className={styles.actions}>
              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Favourite</div>
              </div>

              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Add to compare</div>
              </div>

              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>View more...</div>
              </div>

              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Add to cart</div>
              </div>
            </div>
          </div>

          <div className={styles.content + ' ' + this.getFade('img')}>
            <h5>
              {this.state.activeProduct !== ''
                ? categoryProducts.find(item => item.id === this.state.activeProduct)
                    .name
                : 'empty'}
            </h5>
            <div className={styles.stars}>
              <ProductRating
                id={this.state.activeProduct}
                stars={
                  this.state.activeProduct !== ''
                    ? categoryProducts.find(
                        item => item.id === this.state.activeProduct
                      ).stars
                    : 2
                }
                isStarred={
                  this.state.activeProduct !== ''
                    ? categoryProducts.find(
                        item => item.id === this.state.activeProduct
                      ).isStarred
                    : false
                }
              />
            </div>
          </div>

          <div className={styles.priceCircle + ' ' + this.getFade('img')}>
            <div className={styles.priceLow}>
              {'$' +
                (this.state.activeProduct !== ''
                  ? categoryProducts.find(item => item.id === this.state.activeProduct)
                      .price
                  : 0)}
            </div>
            <div className={styles.priceBasic}>
              {'$' +
                (this.state.activeProduct !== ''
                  ? categoryProducts.find(item => item.id === this.state.activeProduct)
                      .oldPrice
                  : 0)}
            </div>
          </div>
        </div>

        <div className={'container ' + this.getFade()}>
          <div className='row justify-content-between'>
            <div className='col-1 '>
              <Button
                className={styles.button}
                variant='carousel'
                onClick={event => {
                  event.preventDefault();
                  this.handlePageChange('left', pagesCount);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </Button>
            </div>
            <div className='col-10'>
              <div className='row justify-content-between'>
                {categoryProducts
                  .slice(
                    this.state.activePage * this.state.visibleProducts,
                    (this.state.activePage + 1) * this.state.visibleProducts
                  )
                  .map(item => (
                    <div key={item.id} className='col-2'>
                      <Button
                        className={styles.button}
                        variant=''
                        onClick={event => {
                          event.preventDefault();
                          this.handleFadeChange('out', 'product');
                          setTimeout(() => {
                            this.handleProductChange(item.id);
                          }, 700);
                        }}
                      >
                        <ProductSliderBox {...item} />
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
            <div className='col-1'>
              <Button
                className={styles.button}
                variant='carousel'
                onClick={event => {
                  event.preventDefault();
                  this.handlePageChange('right', pagesCount);
                }}
              >
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

ProductSlider.defaultProps = {
  products: [],
  categories: [],
};

export default ProductSlider;
