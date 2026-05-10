'use client'

import Link from 'next/link'
import { Menu, User2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

export default function NavigationSheet() {
    const pathname = usePathname();
    const homeTabs = [
        { name: 'New In', href: '/new-in' },
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'Sale', href: '/sale' }
    ]
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='w-5 h-5 z-50' />
            </SheetTrigger>
            <SheetContent showCloseButton={false} className={`max-w-60 rounded-l-3xl border-b-4`}>
                <div className='w-full h-full flex flex-col justify-between pb-10'>
                    <div className='p-6 flex flex-col gap-7'>
                        {
                            homeTabs.map(tab => (
                                <SheetClose key={tab.name} className={'flex'}>
                                    <Link
                                        href={tab.href}
                                        className={`${pathname === tab.href ? 'text-[#C45A3C]' : ''} text-[#2C2321] font-medium uppercase relative`}
                                    >
                                        {tab.name}
                                        <span key={tab.name} className={`${pathname === tab.href ? 'bg-[#C45A3C] h-0.75' : 'scale-x-0 transition-all duration-300 ease-in-out origin-left group-hover:scale-x-100 group-hover:h-0.75'} absolute bottom-0 left-0 w-full bg-[#C45A3C] rounded-full`}>
                                        </span>
                                    </Link>
                                </SheetClose>
                            ))
                        }
                    </div>

                    <div className='flex flex-row items-center gap-3 px-6 py-3 mx-1 rounded-xl bg-[#C45A3C] shadow-md shadow-[#f7a28a]'>
                        <Avatar>
                            <AvatarImage>
                                <User2 />
                            </AvatarImage>
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <p className='text-white font-times'>New User</p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
