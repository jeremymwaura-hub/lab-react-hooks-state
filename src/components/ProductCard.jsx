import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>

      <p className={styles.card__name}>{product.name}</p>
      <p className={styles.card__price}>{product.price}</p>

      <span className={`${styles.card__status} ${product.inStock ? styles['card__status--in'] : styles['card__status--out']}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>

      <button
        data-testid={'product-' + product.id}
        className={styles.card__btn}
        onClick={() => addToCart && addToCart(product)}

      >
        + Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
