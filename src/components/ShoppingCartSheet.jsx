'use client'

import React, { useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { ShoppingCartIcon } from 'lucide-react'

export default function ShoppingCartSheet() {
  const [cartItems, setCartItems] = useState(null)
  return (
    <Sheet>
        <SheetTrigger>
            <ShoppingCartIcon className='w-5 h-5 md:w-8 md:h-8 cursor-pointer' />
        </SheetTrigger>
        <SheetContent showCloseButton={false} className={`max-w-70 bg-white`}>
            <SheetHeader className={'bg-[#2C2321] '}>
              <h1 className='text-lg md:text-2xl text-white/90 font-bold font-times'>Your Cart</h1>
              <p className='text-sm text-neutral-500'>0 items</p>
            </SheetHeader>
            {
              (!cartItems || cartItems.length === 0 ) && (
                <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                  <h2 className='text-lg md:text-3xl font-bold'>Your cart is empty</h2>
                  <p className='text-sm text-neutral-600 font-mono tracking-tighter'>Add some pieces to get started!</p>
                  <SheetClose className='border rounded-md bg-[#C45A3C] text-white font-mono px-7 py-3 mt-3 uppercase cursor-pointer'>Contiune Shopping</SheetClose>
                </div>
              )
            }
        </SheetContent>
    </Sheet>
  )
}
