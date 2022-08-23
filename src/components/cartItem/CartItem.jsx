import React from "react";
import "../cartItem/cartItem.css"

const CartItem = ({item,quantity,removeItem}) => {
    const {id,product , price, stock, category, imagen, info,} = item;
    
    return (
        <div  key={id}>
            <ul className="listaIn ">
                
                <li className="lista mb-3">{product}</li>
                <li className="lista ms-4 ps-5 ">${price}.-</li>
                <li className="lista ms-4 ps-5">{quantity}</li>
                <li className="lista ms-4 ps-5">${quantity*price}.-</li>
                <li className="lista ms-4 ps-5">
                    <button type="button" className="btn btn-danger" onClick={()=> removeItem(item.id)}>
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </li>
            </ul>
        </div>
        
    );
}

export default CartItem;