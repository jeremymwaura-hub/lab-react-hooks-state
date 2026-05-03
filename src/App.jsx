import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkStyles from './styles/DarkMode.module.css'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  const addToCart = (product) => {
    setCart(prev =>
      prev.find(i => i.id === product.id) ? prev : [...prev, product]
    )
  }

  const handleCategoryChange = (e) => {
    const val = e.target.value
    setCategory(val === '' ? '__none__' : val)
  }

  return (
    <div className={`${darkStyles.wrapper} ${darkMode ? darkStyles.dark : darkStyles.light}`}>

      {/* ── Header ── */}
      <header className="app-header">
        <div className="app-header__brand">
          <span className="app-header__icon">🛒</span>
          <span className="app-header__title">FreshCart</span>
        </div>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      {/* ── Main ── */}
      <main className="app-main">

        {/* Filter bar spans full width */}
        <div className="filter-bar">
          <label className="filter-bar__label" htmlFor="category-select">
            Filter by Category
          </label>
          <select
            id="category-select"
            className="filter-bar__select"
            onChange={handleCategoryChange}
          >
            <option value="all">All Products</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>

        {/* Cart sidebar */}
        <aside className="sidebar">
          <Cart cart={cart} />
        </aside>

        {/* Products */}
        <section className="product-section">
          <ProductList category={category} addToCart={addToCart} />
        </section>

      </main>
    </div>
  )
}

export default App
