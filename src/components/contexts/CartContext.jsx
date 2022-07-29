import React from "react";
import { createContext } from "react";
import { useState } from 'react';


export const CartContext = createContext();

const CartProvider = (props) => {
    //se declara el useState como un array porque vamos a tener la seleccion

    const [cartItems,setCartItems]= useState([]);
    
    const addItem= (item,quantity)=>{
        setCartItems([item])
        console.log("producto seleccionado",item)
    }


    return ( 
        <CartContext.Provider value={{cartItems,setCartItems,addItem}}>
            {props.children}
        </CartContext.Provider>

    );
}

export default CartProvider;