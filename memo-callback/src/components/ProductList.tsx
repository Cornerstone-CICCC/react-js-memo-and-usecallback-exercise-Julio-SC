// src/components/ProductList.tsx
import { useState, useCallback } from 'react'
import GetProductsButton from '../components/GetProductsButton'

type Product = {
  id: number
  title: string
  price: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  // Async function to fetch products
  const fetchProducts = useCallback(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    setProducts(data.products)
  } catch (err) {
    console.error(err)
  }
}, [])

  return (
    <div>
      <h2>Products</h2>
      <GetProductsButton onFetch={fetchProducts} />

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
