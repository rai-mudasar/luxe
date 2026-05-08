import React from 'react'

export default function ContactBanner() {
  return (
    <div className=' bg-[#EBE9E8] pt-7 pb-7 md:pt-20 px-3 md:px-7'>
      <div className='w-full h-50 flex justify-center items-center md:h-90 bg-linear-to-r from-[#C3593C] to-[#B1523C] rounded-xl md:rounded-3xl mt-3'>
        <div className='md:w-110 flex flex-col justify-center items-center'>
          <h1 className='text-2xl md:text-5xl text-white font-times font-bold tracking-wide'>Join the Club</h1>
          <p className='text-[11px] md:text-lg text-neutral-300 my-3 tracking-wide text-center'>Get 15% off your first order plus early access to new drops.</p>
          <div className='w-full flex flex-col sm:flex-row gap-2 md:gap-3'>
            <div className='w-full border border-[#D39B8C] bg-[#BE6953] rounded-full py-0.5 md:py-2'>
              <input placeholder='Your email address' className='text-[10px] md:text-[15px] pl-3 pb-1 md:pb-0 text-[#C0C0C2] font-semibold outline-none border-none' />
            </div>
            <button className='w-full md:w-[30%] bg-black text-white text-[10px] md:text-[15px] rounded-full py-1 md:px-2 cursor-pointer'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
