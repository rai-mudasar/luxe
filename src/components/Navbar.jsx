import { Menu, Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const homeTabs = [
        { name: 'New In', href: '/new-in' },
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'Sale', href: '/sale' }
    ]
    return (
        <div className='w-full h-13 md:h-15 bg-[#EBE9E8] sticky top-0 shadow-md z-50'>
            <div className='w-full h-full flex items-center justify-between px-5 md:px-15'>
                <p className='text-xl md:text-4xl font-times text-[#2C2321] font-semibold'>LUXE</p>
                <div className=' hidden md:flex gap-7'>
                    {
                        homeTabs.map(tab => (
                            <Link href={tab.href} key={tab.name} className='text-[#2C2321] font-medium uppercase hover:underline'>
                                {tab.name}
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-row gap-4 md:gap-7'>
                    <Search className='w-5 h-5 md:w-8 md:h-8' />
                    <ShoppingCart className='w-5 h-5 md:w-8 md:h-8' />
                    <Menu className='w-5 h-5 md:w-8 md:h-8 md:hidden' />
                </div>
            </div>
        </div>
    )
}
