import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay'

export default function Products() {
  const {all_product} = useContext(ShopContext)
  const {productId} =useParams()
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>    
    </div>
  )
}
