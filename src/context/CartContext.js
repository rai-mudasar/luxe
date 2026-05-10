'use client'

import { createContext, useContext, useEffect, useReducer } from "react";

const cartContext = createContext()

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log("entered state:", state)
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) {
                return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...state, { ...action.payload, quantity: 1 }];

        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload);

        case 'INCREMENT':
            return state.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)
        
        case 'DECREMENT':
            const foundItem = state.find(item => item.id === action.payload)

            if(foundItem && foundItem.quantity > 1){
                return state.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
            }

            return state.filter(item => item.id !== action.payload)

        case 'LOAD_CART':
            return action.payload

        case 'CLEAR_CART':
            return [];

        default:
            return state;
    }
}

export function CartContextProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, [])

    useEffect(() => {
        const saved = localStorage.getItem('cart');
        if (saved) dispatch({ type: 'LOAD_CART', payload: JSON.parse(saved) })
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCartItemsPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

    const value = { cart, dispatch, totalCartItems, totalCartItemsPrice };

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(cartContext);
    if (!context) throw new Error('useCart must be present inside CartContextProvider!')
    return context;
}