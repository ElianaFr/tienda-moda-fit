import React from "react";

const CartItem = ({item,quantity,removeItem}) => {
    const {id,product , price, stock, category, imagen, info,} = item;
    
    return (
        <div className="container" key={id}>
            <div className="card shadow" style={{width: 250}} >
            <div className="card-body text-center">
                <span style={{fontSize:6}}> CP: {id} </span>         
                <p className="card-title"> Cantidad seleccionada :{quantity}</p>
                <h5 className="card-title">{product}</h5>
                <p className="card-text">$ {price} .-</p>
                <p className="card-text"> TOTAL $ {quantity*price} .-</p>
                <button type="button" className="btn btn-danger" onClick={()=> removeItem(item.id)}>ELIMINAR</button>

            </div>
            </div>
            
        </div>
        
        
    );
}

export default CartItem;