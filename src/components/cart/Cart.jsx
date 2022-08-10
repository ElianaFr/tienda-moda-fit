import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



const Cart = () => {
    const [totalPrice,setTotalPrice]= useState(0);
    
    const {cartItems,removeItem,clear,cantItems,sendOrder}= useContext(CartContext);
    
    console.log("carrito",cartItems);

    const [formValue,setFormValue]= useState({
        name:"",
        phone: "",
        email:"",
    })
    
    const handleSubmit =(e) => {
                e.preventDefault()
                console.log("prevent",formValue)
                sendOrder(totalPrice,formValue)
            }

    const handleChange=(e)=>{
        setFormValue({...formValue,[e.target.name]: e.target.value})
    }
    
    useEffect(()=>{
        let total = 0;
        cartItems.forEach(({item,quantity})=>{
            total += Number(item.price)* quantity;
        });
        setTotalPrice(total);
    },[cartItems]);

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
                <div className="container">
                    <h3 className=" mt-5">{`TOTAL DE LA COMPRA : $ ${totalPrice}`} </h3>
                    
                </div>

                <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                    <div className="col-sm-3">
                        <input 
                            type="text" 
                            name="name"
                            className="form-control m-2" 
                            placeholder="Nombre"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <input 
                            type="number" 
                            name="phone"
                            className="form-control m-2" 
                            placeholder="Celular"
                            value={formValue.phone}
                            onChange={handleChange}
                        />
                        <input 
                            type="email" 
                            name="email"
                            value={formValue.email}
                            className="form-control m-2" 
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <button 
                            type="submit" 
                            className="btn btn-secondary mt-4">ENVIAR PEDIDO
                        </button>
                    
                    </div>
                </form>

            </div>
            </>
        )}
        </>        
    );
};

export default Cart;