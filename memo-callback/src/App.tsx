import { useState } from 'react'
import Profile from './components/Profile'
import ProductList from './components/ProductList'

const App = () => {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h1>React memo and useCallback Exercise</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>

      <hr />

      <Profile firstname="Julio" lastname="Martinez" />

<ProductList />

    </div>
  )
}

export default App
