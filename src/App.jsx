import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import ProductList from './components/ProductList/ProductList'
function App() {

  const [cart, setCart] = useState([])

  console.log('checking cart ********* ', cart)
  return (
    <>
      <h4>Siimple learning zustand state management</h4>
      <hr />
      <Cart cart={cart} setCart={setCart} />
      <hr />
      <ProductList setCart={setCart} />
    </>
  )
}

export default App
