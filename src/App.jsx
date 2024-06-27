import { useReducer } from 'react'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { ProductContext } from './ProductContext'
import { reducer } from './ProductContext'
import { initialState } from './ProductContext'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <>
    <ProductContext.Provider value={{ state, dispatch }}>
      <ProductList />
      <Basket />
    </ProductContext.Provider>
  </>
}

export default App
