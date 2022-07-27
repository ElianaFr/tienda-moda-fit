import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({productos}) => {
    console.log("data de la promesa de itemdetailcontainer", productos)
    const {id,product, price, stock, category, imagen, info}= productos
    const [cantidad,setCantidad] = useState(0)
    
    const onAdd= () => {
        console.log("productos a agregar",productos);
        console.log("cantidad",cantidad)
    };
    return (
        <div className="container mb-5">
            <p className="text-center fs-5">DETALLE DEL PRODUCTO</p>
            <div className="card shadow" style={{width: 250}}>
                <img src={imagen} className="card-img-top p-2" alt="..."/>
                <div className="card-body text-center">
                    <span>{id}</span>
                    <h5 className="card-title">{product} </h5>
                    <p className="card-text">$ {price} .-</p>
                    <p className="card-text"> {info}</p>
                    <ItemCount stock={stock} initial={0} actualizarCant={setCantidad} />  
                    
                    <div className="mb-2">
                    <Link to="/cart"><button type="button" className="btn btn-primary btn-sm" onClick={onAdd} > 
                     Finalizar compra
                            </button> 
                            </Link>
                        
                    </div>
                </div>
            </div>
        </div>
        );
}

export default ItemDetail;