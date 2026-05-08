import React from 'react'

export default function FeaturedCards() {
    const featuredCards = [
        {name: "Women", href: "/women", bgColor: "bg-[#5D4036] hover:bg-[#764638]"},
        {name: "Men", href: "/men", bgColor: "bg-[#4D443A] hover:bg-[#705D49]"},
        {name: "Accessories", href: "/accessories", bgColor: "bg-[#694A3E] hover:bg-[#7E4D3D] md:col-span-2 lg:col-span-1"},
    ]
  return (
    <div className='w-full bg-[#EBE9E8] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 md:gap-5 pt-7 md:pt-20 px-7 md:px-17'>
        {
            featuredCards.map(card => (
                <div className={`w-full h-50 md:h-80 ${card.bgColor} rounded-xl flex items-end pb-9 pl-4 transition-all delay-10 duration-300 hover:scale-[1.04] hover:cursor-pointer`} key={card.name}>
                    <div className='w-full'>
                        <p className='text-[12px] uppercase text-[#C45A3C]'>Explore</p>
                        <p className='text-2xl md:text-3xl text-white font-bold font-times'>{card.name}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

