import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cartItems,removeItem,clear,total,cantItems}= useContext(CartContext);
    const tot = total ();
    console.log("carrito",cartItems);

    

    return ( 
        <>
        {cartItems.length === 0 ? (
            <>
                <h1>UPS!! PARECE QUE NO HAY PRODUCTOS</h1>
            <Link to="/">
                <button className="btn btn-primary m-5">HOME</button>
            </Link>
            </>
        ) : (
            <>
            <div className="container mb-5">
                <p className="text-center fs-5">RESUMEN DE COMPRA</p>

                <button type="button" className="btn btn-secondary mb-5" onClick={()=> clear()}>VACIAR CARRITO</button>

                {cartItems.map((item) => {
                    return(<CartItem item={item.item} quantity = {item.quantity} clear={clear} removeItem={removeItem} />)
                })}
                
                <h3 className=" mt-5"> TOTAL DE LA COMPRA : $ {tot}</h3>

            </div>
            </>
        )}
        </>        
    );
};

export default Cart;