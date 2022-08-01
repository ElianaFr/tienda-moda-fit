import React from "react";
import { createContext } from "react";
import { useState } from 'react';


export const CartContext = createContext();

const CartProvider = (prop) => {
    //se declara el useState como un array porque vamos a tener la seleccion

    const [cartItems,setCartItems]= useState([]);
    // agregar producto

    const addItem= (item,quantity)=>{
        const newItem = isInCart(item);
        if (newItem){
            quantity = quantity + newItem.quantity;
            setCartItems(cartItems.splice
                (cartItems.findIndex((elemento => elemento.item.id === item.id),1)))
        }
        setCartItems([...cartItems,{item,quantity}]);
        console.log("producto agregado",cartItems)
    }
    // funcion saber si esta en el carrito

    const isInCart = (item) => {
        return cartItems.find((elemento) => elemento.item === item);
    }

    // funcion clear
    const clear =()=>{
        setCartItems([])
    }
    // funcion remover item
    const removeItem = (itemId)=>{
        setCartItems(cartItems.filter((elemento) => elemento.item.id !== itemId))
    }

    const total = ()=>{
        return cartItems.reduce((valorAnterior,valorActual)=> valorAnterior + (valorActual.item.price * valorActual.quantity),0)
    }

    const cantItems = () => {
        return cartItems.reduce((valorAnterior,valorActual) => valorAnterior + valorActual.quantity,0)
    }

    return ( 
        <CartContext.Provider value={{cartItems,setCartItems,addItem,clear,removeItem,total,cantItems}}>
            {prop.children}
        </CartContext.Provider>

    );
}

export default CartProvider;