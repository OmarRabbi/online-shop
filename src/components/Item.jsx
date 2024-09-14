import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='flex flex-col justify-center gap-2 transform scale-100 hover:scale-105 transition-transform duration-600 ease-in-out'>
        <Link to={`/product/${props.id}`}><img className='rounded' src={props.image} alt="" /></Link>
        <p className='text-sm'>{props.name}</p>
        <div className='flex gap-x-4'>
            <p className='font-bold'>${props.new_price}</p>
            <p className='line-through font-lighter text-gray-600'>${props.old_price}</p>
        </div>
    </div>
  )
}
