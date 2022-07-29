import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
    const {cartItems}= useContext(CartContext);
    console.log(cartItems);
    return ( 
        
        <div className="container mb-5">
            <p className="text-center fs-5">RESUMEN DE COMPRA</p>

            {cartItems.map((productos)=> (
            <>
                <div className="card shadow" style={{width: 250}}>
                <div className="card-body text-center">
                    {/* <span style={{fontSize:6}}> CP: {productos.id} </span> */}
                    <p className="card-title"> Cantidad seleccionada :</p>
                    <h5 className="card-title">{productos.product}</h5>
                    <p className="card-text">$ {productos.price} .-</p>
                    <p className="card-text"> TOTAL</p>
                </div>
            </div>
            </>
            ))}
            
        </div>        
    );
}

export default Cart;