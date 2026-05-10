'use client'

import Link from 'next/link'
import React from 'react'
import ShoppingCartSheet from './ShoppingCartSheet'
import NavigationSheet from './NavigationSheet'
import { Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const homeTabs = [
        { name: 'New In', href: '/new-in' },
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'Sale', href: '/sale' }
    ]
    return (
        <div className='w-full h-13 md:h-15 bg-[#EBE9E8] sticky top-0 shadow-md z-50'>
            <div className='w-full h-full flex items-center justify-between px-5 md:px-15'>
                <Link href={'/'} className='text-xl md:text-4xl font-times text-[#2C2321] font-semibold'>LUXE</Link>
                <div className=' hidden md:flex gap-7'>
                    {
                        homeTabs.map(tab => (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={`${pathname === tab.href ? 'text-[#C45A3C]' : ''} text-[#020202] hover:text-[#C45A3C] transition-colors duration-300 font-medium uppercase group relative`}
                            >
                                {tab.name}
                                <span className={`${pathname === tab.href ? 'h-0.75' : 'scale-x-0 transition-all duration-300 ease-in-out origin-left group-hover:scale-x-100 group-hover:h-0.75'} absolute bottom-0 left-0 w-full bg-[#C45A3C] rounded-full`}>
                                </span>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-row justify-center items-center gap-4 md:gap-7'>
                    {/* <Search className='w-5 h-5 md:w-8 md:h-8' /> */}
                    <ShoppingCartSheet />
                    <div className={'md:hidden -mb-2'}>
                        <NavigationSheet />
                    </div>
                </div>
            </div>
        </div>
    )
}
