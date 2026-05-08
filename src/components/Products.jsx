import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Products() {
  const bestItems = [
    { name: "Knit Sweater", price: "240", imageUrl: "", tag: "new" },
    { name: "Leather Bag", price: "30", imageUrl: "", tag: "sale" },
    { name: "Ultra Watch Pro 2", price: "500", imageUrl: "", tag: "best" },
    { name: "Wool Blend Overcoat", price: "430", imageUrl: "", tag: "" },
  ]
  return (
    <div className='w-full px-3 md:px-17 pt-7 md:pt-20 bg-[#EBE9E8]'>
      <div>
        <p className='text-[12px] text-[#875A4B] tracking-widest uppercase '>Curated For You</p>
        <div className='w-full my-3 flex justify-between items-center'>
          <h1 className='text-2xl md:text-4xl font-bold font-times'>Best Sellers</h1>
          <div className='hidden md:flex gap-2 justify-center items-center cursor-pointer hover:text-neutral-600'>
            <p>View All</p>
            <ArrowRight className='w-5 h-5' />
          </div>
        </div>
      </div>

      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-5'>
        {
          bestItems.map(item => (
            <div key={item.name} className='h-50 md:h-80 rounded-xl bg-amber-300 transition-all ease-out duration-500 md:hover:-translate-y-4 hover:scale-[1.02] shadow-none hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]'>
              <div className='h-[75%]'></div>
              <div className='h-[25%] w-full bg-white px-3 py-3 rounded-b-xl'>
                <p className='text-[10px] md:text-[15px]'>{item.name}</p>
                <p className='text-[10px] md:text-[15px] font-bold text-[#A14D35]'>{`$${item.price}`}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
