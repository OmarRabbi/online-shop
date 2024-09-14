import React from 'react'
import arrow_icon from '../assets/breadcrumb_arrow.png'

export default function ({product}) {
  return (
    <div className='flex items-center justify-center gap-2'>
        SHOP <img src={arrow_icon}/>{product.category} <img src={arrow_icon}/> {product.name}
    </div>
  )
}
