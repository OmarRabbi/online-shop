import React from 'react'
import all_product from '../assets/all_product'
import Item from '../components/Item';
import dropdown_icon from '../assets/dropdown_icon.png'

export default function Category(props) {
  return (
    <div className='px-12 py-6'>
        <img src={props.banner} alt="Category Banner" />
        <div className='py-4 flex items-center justify-between'>
            <p><span>Showing 1-12</span> out of 36 products</p>
            <div className='flex gap-2 items-center border-2 border-black rounded-full px-4 py-2 w-[10%] cursor-pointer'>Sort by <img className='w-[15%] h-[15%]' src={dropdown_icon} alt="" /></div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-10'>
            {all_product.map((item, i)=>{
                if (props.category === item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                    return null;
                }
            })}
        </div>
    </div>
  )
}
