import { useState } from "react";


const Cart = () => {
    const [cantidad, setCantidad]= useState(0);
    
    return (    
        <span >
            <i className="bi bi-bag-heart-fill cart" >  {cantidad}             
            </i>
        </span>
    );
}

export default Cart;