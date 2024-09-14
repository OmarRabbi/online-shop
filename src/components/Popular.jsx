import React from 'react'
import popular_data from '../assets/data'
import Item from './Item'

export default function Popular() {
  return (
    <div className='flex flex-col items-center gap-4 w-[80%] mx-auto my-10'>
        <h1 className='font-normal text-5xl'>POPU<span className='text-red-500'>LAR IN WO</span>MEN</h1>
        <hr className='w-[20%] border-2 border-red-400 rounded-lg'/>
        <div className='mt-8 flex gap-5'>
            {popular_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
