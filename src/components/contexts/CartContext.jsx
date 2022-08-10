import { collection, getFirestore } from "firebase/firestore";
import React from "react";
import { createContext } from "react";
import { useState } from 'react';
import { addDoc } from "firebase/firestore";


export const CartContext = createContext();

const CartProvider = (prop) => {
    //se declara el useState como un array porque vamos a tener la seleccion

    const [cartItems,setCartItems]= useState([]);

    // agregar orden de clientes
    const sendOrder = (totalPrice,buyerData)=>{
        const database = getFirestore();
        const orderCollection = collection(database,"orders");
        
        const order = {items:cartItems,total:totalPrice,buyer:buyerData};
        addDoc(orderCollection,order).then(res => 
            {const refItem = res.id
            console.log(refItem)
            alert(`la orden ${refItem} se ha generado con exito`)
            });
        }
    
    
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

    
    const cantItems = () => {
        return cartItems.reduce((valorAnterior,valorActual) => valorAnterior + valorActual.quantity,0)
    }

    return ( 
        <CartContext.Provider value={{cartItems,setCartItems,addItem,clear,removeItem,cantItems,sendOrder}}>
            {prop.children}
        </CartContext.Provider>

    );
}

export default CartProvider;