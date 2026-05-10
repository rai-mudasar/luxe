'use client'

import React, { useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { ShoppingCartIcon, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ScrollArea } from './ui/scroll-area'
import SafeImage from './SafeImage'

export default function ShoppingCartSheet() {
  const { cart, dispatch, totalCartItems, totalCartItemsPrice } = useCart()
  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative'>
          <ShoppingCartIcon className='w-5 h-5 md:w-8 md:h-8 cursor-pointer' />
          <div className='w-4 h-4 bg-[#C45A3C] text-[10px] text-white rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center'>{totalCartItems}</div>
        </div>
      </SheetTrigger>
      <SheetContent showCloseButton={false} className={`max-w-screen bg-white`}>
        <SheetHeader className={'bg-[#2C2321] '}>
          <h1 className='text-lg md:text-2xl text-white/90 font-bold font-times'>Your Cart</h1>
          <p className='text-sm text-neutral-500'>{totalCartItems} items</p>
        </SheetHeader>
        {
          (!totalCartItems || totalCartItems.length === 0) ? (
            <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
              <h2 className='text-lg md:text-3xl font-bold'>Your cart is empty</h2>
              <p className='text-sm text-neutral-600 font-mono tracking-tighter'>Add some pieces to get started!</p>
              <SheetClose className='border rounded-md bg-[#C45A3C] text-white font-mono px-7 py-3 mt-3 uppercase cursor-pointer'>Contiune Shopping</SheetClose>
            </div>
          ) : (
            <div className='w-full h-full flex flex-col justify-between'>
              <ScrollArea className={'w-full h-[60%] sm:h-[50%]'}>
                {
                  cart.map(item => (
                    <div key={item.id} className='w-full px-4'>
                      <div className='border-b flex justify-between pb-2 mb-3'>
                        <div className='flex flex-row gap-2'>
                          <div className='w-20 h-25 bg-black rounded-lg overflow-hidden relative'>
                            <SafeImage
                              src={item.imageUrl}
                              fill
                              alt="Product Image"
                              className={"object-contain"}
                            />
                          </div>
                          <div className='mt-2'>
                            <p className='text-[10px] text-[#C45A3C] font-mono tracking-widest uppercase'>{item.type}</p>
                            <h2 className='w-35 text-sm font-times font-semibold truncate'>{item.name}</h2>
                            <div className='flex items-center gap-2 mt-5'>
                              <div
                                onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })} className='w-6 h-6 flex justify-center items-center border rounded-[4px] cursor-pointer'>
                                -
                              </div>
                              <div>{item.quantity}</div>
                              <div
                                onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}
                                className='w-6 h-6 flex justify-center items-center border rounded-[4px] cursor-pointer'>
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='mt-2'>
                          <X onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })} className='w-5 h-5 ml-3 mb-2 cursor-pointer' />
                          <p>$120</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </ScrollArea>
              <div className='w-full h-[40%] sm:h-[50%] bg-[#EBE9E8] p-3'>
                <div className='flex flex-col gap-1'>
                  <div className='w-full flex justify-between'><span>Subtotal</span> <span>${totalCartItemsPrice}</span></div>
                  <div className='w-full flex justify-between'><span>Shipping</span> <span>free</span></div>
                  <div className='w-full flex justify-between'><span>Tax(8%)</span> <span>${totalCartItemsPrice * 0.08}</span></div>
                  <div className='w-full flex justify-between border-t border-black pt-2'><span>Total</span> <span>${totalCartItemsPrice + (totalCartItemsPrice * 0.08)}</span></div>
                </div>
                <div className='mt-2'>
                  <div className={'w-full bg-[#C45A3C] text-white border border-[#C45A3C] py-1.5 mb-1 flex justify-center items-center rounded-lg cursor-pointer'}>Checkout</div>
                  <SheetClose className={'w-full border border-black py-1.5 rounded-lg cursor-pointer'}>Continue Shopping</SheetClose>
                </div>
              </div>
            </div>
          )
        }
      </SheetContent>
    </Sheet>
  )
}
