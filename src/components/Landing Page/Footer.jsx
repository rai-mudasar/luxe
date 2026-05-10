import Link from 'next/link'

export default function Footer() {
  return (
    <div className='h-60 sm:h-80 lg:h-50 bg-black text-white'>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-1 md:gap-2 mx-7 md:ml-17 my-7'>
            <div className='lg:col-span-3'>
                <h1 className='text-sm sm:text-lg font-bold font-times mb-2 uppercase'>Luxe</h1>
                <p className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>Conscious fashion for the modern wardrobe.</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[10px] sm:text-[15px] font-semibold mb-2 tracking-widest uppercase'>Shop</h1>
                <Link href={'/'} className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>New Arrivals</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>Best Seller</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>Sale</Link>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[10px] sm:text-[15px] font-semibold mb-2 tracking-widest uppercase'>Help</h1>
                <Link href={'/'} className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>Shipping</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>Return</Link>
                <Link href={'/'} className='text-[9px] sm:text-[13px] text-neutral-500 hover:text-[#C45A3C]'>FAQ</Link>
            </div>
            <div className=''>
                <h1 className='text-[10px] sm:text-[15px] font-semibold mb-2 tracking-widest uppercase'>Follow</h1>
                <div>
                    
                </div>
            </div>
        </div>

        <div className='h-13 border-t border-neutral-500 text-white flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-0 mx-17 md:mx-17'>
            <div className='flex items-center gap-1 text-neutral-500'>
                <p className='text-[12px] font-semibold cursor-pointer hover:text-[#C45A3C]'>Terms & Support</p>
                <p className='text-[12px] font-bold'>.</p>
                <p className='text-[12px] font-semibold cursor-pointer hover:text-[#C45A3C]'>Privacy Policy</p>
            </div>
            <p className='sm:w-50 text-[12px] sm:text-sm font-semibold text-neutral-400'>© 2026 Developed by <span className='font-semibold font-times text-[#C3593C]'>Mudasar</span></p>
        </div>
    </div>
  )
}
