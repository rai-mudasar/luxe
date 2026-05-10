import { ArrowRight } from 'lucide-react'
import React from 'react'
import SafeImage from '../SafeImage'

export default function Products() {
  const bestItems = [
    {
      name: "Knit Sweater",
      price: "240",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC5PFzMv2TkNg-i12X4EbCHZCTgiWrjLoF1rUjoHR9lRyCMaaAKolz3I&s=10",
      tag: "new"
    },
    {
      name: "Leather Bag",
      price: "30",
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      tag: "sale"
    },
    {
      name: "Ultra Watch Pro 2",
      price: "500",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqo5d7DcwvEH488ydaxVN4CEmibJkFpHZpC4CkK26cdp0zIosm7tsOwOg&s=10",
      tag: "best"
    },
    {
      name: "Wool Blend Overcoat",
      price: "430",
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      tag: ""
    },
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
            <div key={item.name} className='h-50 md:h-80 rounded-xl transition-all ease-out duration-500 md:hover:-translate-y-4 hover:scale-[1.02] shadow-none hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden'>
              <div className='h-[75%] relative'>
                <SafeImage
                  src={item.imageUrl}
                  fill
                  alt="Product Image"
                  className={"object-contain"}
                />
              </div>
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
