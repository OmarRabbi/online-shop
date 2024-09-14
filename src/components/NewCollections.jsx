import React from 'react'
import new_collection from '../assets/new_collections'
import Item from './Item'

export default function NewCollections() {
  return (
    <div className='flex flex-col items-center gap-4 w-[80%] m-auto my-10'>
        <h1 className='font-normal text-5xl'>NE<span className='text-red-500'>W COLLECT</span>ION</h1>
        <hr className='w-[22%] border-2 border-red-400 rounded-lg'/>
        <div className='mt-8 grid lg:grid-cols-4 sm:grid-cols-3 m-2'>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
