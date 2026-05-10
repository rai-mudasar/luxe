'use client'

import { useState } from 'react';
import { ArrowRight, HeartPlus } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area';
import SafeImage from '@/components/SafeImage';

export default function page() {

    const [activeTimeFilterTab, setActiveTimeFilterTab] = useState('all')
    const [activeTypeFilterTab, setActiveTypeFilterTab] = useState('all')

    const timeFilterTabs = [
        { name: 'All' },
        { name: 'This week' },
        { name: 'Last week' },
        { name: 'This month' },
    ];

    const typeFilterTabs = [
        { name: 'all' },
        { name: 'outwears' },
        { name: 'knitwear' },
        { name: 'footwear' },
    ];

    const products = [
        {
            id: 2,
            name: "Structured Wool Overcoat",
            type: "outwear",
            tag: "new",
            price: 850,
            description: "Premium wool tailored winter coat.",
            imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Grained Leather Chelsea Boots",
            type: "footwear",
            tag: "sale",
            price: 320,
            description: "Durable leather with sleek profile.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPo-dSOeVQnzgM0Sef-MiqjC4LleAS85G2bLY0fghqvuy2b99kQgaFNub&s=10"
        },
        {
            id: 4,
            name: "Onyx Silk Scarf",
            type: "accessories",
            tag: "new",
            price: 120,
            description: "Hand-rolled edges, pure silk finish.",
            imageUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Wide-Leg Pleated Trousers",
            type: "trausers",
            tag: "new",
            price: 210,
            description: "Relaxed fit with fluid drape.",
            imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            name: "Merino Mock-Neck Sweater",
            type: "knitwear",
            tag: "sale",
            price: 155,
            description: "Fine merino wool layering piece.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC5PFzMv2TkNg-i12X4EbCHZCTgiWrjLoF1rUjoHR9lRyCMaaAKolz3I&s=10"
        },
        {
            id: 7,
            name: "Technical Puffer Jacket",
            type: "outwear",
            tag: "new",
            price: 490,
            description: "Water-resistant shell, high insulation.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60pRxSLZAVAI3r2VioUje2BZp2LpeRhNsOrk9_bWSw2XSriQ5YwWO4Xk&s=10"
        },
        {
            id: 8,
            name: "Minimalist Suede Loafers",
            type: "footwear",
            tag: "new",
            price: 275,
            description: "Soft suede for effortless comfort.",
            imageUrl: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 9,
            name: "Silver Link Bracelet",
            type: "accessories",
            tag: "sale",
            price: 190,
            description: "Architectural silver link jewelry piece.",
            imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 10,
            name: "Straight-Cut Chinos",
            type: "trausers",
            tag: "new",
            price: 140,
            description: "Durable cotton, modern tailored fit.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_Q0CG9PSxMnsp8w3dNU0aV1ykWgQI0b4CmYk1EGOPA&s"
        },
        {
            id: 11,
            name: "Cable-Knit Wool Cardigan",
            type: "knitwear",
            tag: "new",
            price: 340,
            description: "Heavyweight knit with sustainable buttons.",
            imageUrl: "https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 12,
            name: "Shearling Aviator Jacket",
            type: "outwear",
            tag: "new",
            price: 1200,
            description: "Genuine lambskin offering ultimate warmth.",
            imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 13,
            name: "Heritage Trench Coat",
            type: "outwear",
            tag: "sale",
            price: 680,
            description: "Classic weatherproof gabardine cotton fabric.",
            imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 14,
            name: "Smooth Leather Tote",
            type: "accessories",
            tag: "new",
            price: 450,
            description: "Vegetable-tanned leather ages beautifully everyday.",
            imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 15,
            name: "Ribbed Beanie Hat",
            type: "accessories",
            tag: "new",
            price: 65,
            description: "Thick wool locks in heat.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIU-zmbSkrjMHlfnGQhEI7ORY_O38whV0liD90D8-RdQ1Hii9-d4Y-_Wy&s=10"
        },
        {
            id: 16,
            name: "Desert Trek Boots",
            type: "footwear",
            tag: "sale",
            price: 180,
            description: "Versatile suede with crepe sole.",
            imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 17,
            name: "V-Neck Merino Polo",
            type: "knitwear",
            tag: "new",
            price: 170,
            description: "Sophisticated fine merino wool polo.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTxJAqd_Jv57_iJDitkYMlH9FyR-jmrIgXZC1oqVUOw&s"
        },
        {
            id: 18,
            name: "Slim Fit Corduroy Trousers",
            type: "trausers",
            tag: "new",
            price: 165,
            description: "Fine-wale corduroy with vintage appeal.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_Q0CG9PSxMnsp8w3dNU0aV1ykWgQI0b4CmYk1EGOPA&s"
        },
        {
            id: 19,
            name: "Quilted Vest",
            type: "outwear",
            tag: "sale",
            price: 220,
            description: "Lightweight layer for transitional weather.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcy3buXHylPqydipznzveEVsNuOwdh0oD9Ba1AJpQJPVVQeAFaW5warLO&s=10"
        }
    ];
    return (
        <div className='w-full h-full bg-[#EBE9E8]'>
            <div className=''>
                <div className='w-full bg-linear-to-r from-[#2C2321] to-[#38312C] flex flex-col gap-6 pl-3 md:pl-15 pt-4 md:pt-12 pb-6 md:pb-12'>
                    <h1 className='text-3xl md:text-6xl text-white mt-3 font-times'>Sales</h1>
                    <div className='flex flex-row gap-2'>
                        {
                            timeFilterTabs.map(tab => (
                                <div key={tab.name} className={`px-4 py-2 border border-neutral-700 text-[9px] text-white/70 font-mono tracking-widest uppercase rounded-full cursor-pointer hover:bg-[#C45A3C] flex justify-center items-center ${activeTimeFilterTab === tab.name.toLowerCase() ? 'bg-[#C45A3C]' : ''}`}>
                                    {tab.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full bg-white flex flex-row gap-3 p-3 border-b'>
                    {
                        typeFilterTabs.map(tab => (
                            <p key={tab.name} className={`px-3 py-1 border border-neutral-500 hover:border-[#C45A3C] text-[9px] text-black hover:text-white hover:bg-[#C45A3C] uppercase rounded-sm font-mono tracking-widest ${activeTypeFilterTab === tab.name.toLowerCase() ? 'bg-[#C45A3C] text-white border-0' : ''}`}>
                                {tab.name}
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className='w-full md:flex flex-row'>
                <ScrollArea className={'w-70 h-screen hidden md:flex bg-white/80 px-3 pt-3'}>
                    <h3 className='text-sm text-[#C45A3C] font-mono uppercase'>Categories</h3>
                    <div className='w-full flex flex-col gap-3 p-3 border-b'>
                        {
                            typeFilterTabs.map(tab => (
                                <div key={tab.name} className={`flex justify-between items-center px-3 py-2 text-black  hover:text-white hover:bg-[#C45A3C] rounded-md  ${activeTypeFilterTab === tab.name.toLowerCase() ? 'bg-[#C45A3C] text-white border-0' : ''}`}>
                                    <p className='text-[11px] font-sans tracking-widest uppercase rounded-sm'>
                                        {tab.name}
                                    </p>
                                    <span className='text-[11px]'>
                                        12
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </ScrollArea>
                <ScrollArea className='w-full h-screen'>
                    <div className='p-3'>
                        <div className='w-full h-30 bg-linear-to-r from-[#2C2321] to-[#38312C] px-5 rounded-[12px] flex flex-col md:flex-row gap-5  justify-center md:justify-between md:items-center'>
                            <div>
                                <h2 className='text-xl text-white font-semibold font-times'>Fresh Drops This Week</h2>
                                <p className='text-[12px] text-neutral-500'>12 new pieces added</p>
                            </div>
                            <button className='w-full md:w-40 flex justify-center items-center gap-4 py-1.5 bg-[#C45A3C] text-white text-[12px] font-mono rounded-sm uppercase'>Shop all <ArrowRight className='w-4 h-4' /></button>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 px-3 md:px-5 py-5'>
                        {products.map(product => (
                            <div key={product.id} className='h-80 md:h-100 rounded-lg overflow-hidden shadow-md cursor-pointer group'>
                                <div className='h-[75%] relative overflow-hidden'>
                                    <SafeImage
                                        src={product.imageUrl}
                                        fill
                                        alt="Product Image"
                                        className={"object-contain"}
                                    />
                                    <button className='w-[80%] text-[11px] md:text-[16px] text-white bg-[#C45C3A] md:bg-[#2C2321] hover:bg-[#C45C3A] absolute bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 rounded-md py-1.5 md:py-2 md:opacity-0 group-hover:opacity-100 md:translate-y-4 group-hover:translate-y-0 ease-out transition-all duration-400 cursor-pointer uppercase flex justify-center items-center gap-3'>
                                        <HeartPlus className='w-4 md:w-5 h-4 md:h-5' />
                                        Add to Cart
                                    </button>
                                </div>
                                <div className='h-[25%] p-2'>
                                    <p className='text-[10px] md:text-sm text-[#C45A3C] tracking-widest '>{product.type}</p>
                                    <h1 className='text-sm md:text-lg font-semibold font-times truncate mt-1.5'>{product.name}</h1>
                                    <p className='text-sm'>${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
