import React from 'react'
import styles from '../styles/DarkMode.module.css'

const Cart = ({ cart }) => {
  const total = cart
    .reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0)
    .toFixed(2)

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <span className={styles['cart__header-icon']}>🛒</span>
        <h2 className={styles['cart__header-title']}>Shopping Cart</h2>
        {cart.length > 0 && (
          <span className={styles['cart__header-count']}>{cart.length}</span>
        )}
      </div>

      <div className={styles.cart__body}>
        {cart.length === 0 ? (
          <div className={styles.cart__empty}>
            <span className={styles['cart__empty-icon']}>🛍️</span>
            <p className={styles['cart__empty-text']}>Your cart is empty.<br />Add some items to get started!</p>
          </div>
        ) : (
          <>
            <ul className={styles.cart__list}>
              {cart.map(item => (
                <li key={item.id} className={styles.cart__item}>
                  <span className={styles['cart__item-name']}>{item.name} is in your cart.</span>
                  <span className={styles['cart__item-price']}>{item.price}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cart__total}>
              <span className={styles['cart__total-label']}>Total</span>
              <span className={styles['cart__total-amount']}>${total}</span>
            </div>

            <button className={styles['cart__checkout-btn']}>
              Checkout →
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
