import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='w-full bg-linear-to-r from-[#2C2321] to-[#38312C] flex flex-col pl-3 md:pl-15 pt-25 md:pt-32 pb-25 md:pb-32'>
        <p className='text-[10px] md:text-[15px] text-[#A14D35] uppercase'>Autumn/winter 2024</p>
        <p className='text-[42px] md:text-6xl text-white mt-3 font-times'>Redefine Your Everyday</p>
        <p className='md:not-last:w-[50vw] text-[rgb(184,176,168)] text-[15px] md:text-[20px] mt-2 '>Curated pieces designed for the modern individual. Timeless style meets concise craftsmanship</p>
        <div className='w-43 md:w-60 bg-[#C45A3C] text-white rounded-full flex justify-center items-center gap-2 px-4 py-2 md:py-5 mt-7 group hover:cursor-pointer'>
            <p className='text-[12px] md:text-[15px] font-semibold uppercase'>Shop Collection</p>
            <ArrowRight className='w-4 h-4 md:w-7 md:h-6 transition-transform duration-100 group-hover:translate-x-2 group-hover:scale-110' />
        </div>
    </div>
  )
}
