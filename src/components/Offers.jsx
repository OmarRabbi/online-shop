import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

export default function Offers() {
  return (
    <div className='flex w-[80%] h-[50vh] px-12 py-4 mx-auto rounded-lg bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
        <div className='flex-1 flex flex-col justify-center items-start gap-4'>
            <h1 className='font-semibold text-5xl'>Exclusive</h1>
            <h1 className='font-semibold text-5xl'><span className='text-red-500'>Offers</span> For You</h1>
            <p className='font-base text-lg'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="px-6 py-3 mt-6 flex gap-4 bg-red-500 text-sm text-white rounded-full cursor-pointer hover:bg-red-600 transition-transform ease-in-out">Check Now</button>
        </div>
        <div>
            <img className='h-[100%]' src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
