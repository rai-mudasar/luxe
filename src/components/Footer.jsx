import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='h-60 sm:h-80 lg:h-50 flex flex-col bg-[#EBE9E8] border-t border-neutral-300'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-7 mx-3 md:mx-17 my-7'>
            <div className=''>
                <h1 className='text-sm sm:text-lg font-bold font-times mb-2 uppercase'>Luxe</h1>
                <p className='text-[9px] sm:text-[13px]'>Conscious fashion for the modern wardrobe.</p>
            </div>
            <div className=' flex flex-col'>
                <h1 className='text-[10px] sm:text-[15px] font-semibold mb-2 tracking-widest uppercase'>Shop</h1>
                <Link href={'/'} className='text-[9px] sm:text-[13px]'>New Arrivals</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px]'>Best Seller</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px]'>Sale</Link>
            </div>
            <div className=' flex flex-col'>
                <h1 className='text-[10px] sm:text-[15px] font-semibold mb-2 tracking-widest uppercase'>Help</h1>
                <Link href={'/'} className='text-[9px] sm:text-[13px]'>Shipping</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px]'>Return</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px]'>FAQ</Link>
            </div>
            <div className=''>
                <h1 className='text-[10px] sm:text-[15px] font-semibold mb-2 tracking-widest uppercase'>Follow</h1>
                <div>
                    
                </div>
            </div>
        </div>
        <div className='w-full h-13 bg-black text-white flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1  sm:gap-0 absolute bottom-0 sm:px-17 md:px-27'>
            <div className='flex gap-17'>
                <p className='text-[12px] font-semibold'>Terms & Support</p>
                <p className='text-[12px] font-semibold'>Privacy Policy</p>
            </div>
            <p className='sm:w-35 text-[12px] sm:text-sm font-semibold'>Developed by <span className='font-semibold font-times text-[#C3593C]'>Mudasar</span></p>
        </div>
    </div>
  )
}
