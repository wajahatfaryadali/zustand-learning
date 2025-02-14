import './App.css'
import Cart from './components/Cart/Cart'
import ProductList from './components/ProductList/ProductList'
import UserDetails from './components/UserDetails/UserDetails'
function App() {

  return (
    <>
      <h4>Siimple learning zustand state management</h4>
      <hr/>
      <div>
        <UserDetails />
      </div>
      <hr />
      <Cart />
      <hr />
      <ProductList />
    </>
  )
}

export default App
