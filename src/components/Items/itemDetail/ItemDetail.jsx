import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({productos}) => {
    console.log("data de la promesa de itemdetailcontainer", productos)
    
    const {id,product, price, stock, category, imagen, info}= productos
    
    const [cantidad,setCantidad] = useState(0)
    
    const onAdd= (cantidad) => {
        setCantidad(cantidad)
        console.log("productos a agregar",productos);
        console.log("cantidad",cantidad)
        toast.success(`🚀 ${cantidad} productos se agregaron al carrito`, {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        

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
                    {cantidad == 0 ? (
                        <ItemCount stock={stock} initial={0} onAdd={onAdd} />) :
                        (<ToastContainer></ToastContainer>)
                    }
                    
                    
                    <div className="mb-2">
                    {(cantidad > 0) &&
                    <Link to="/cart"><button type="button" className="btn btn-primary btn-sm"> 
                    Finalizar compra
                    </button> 
                    </Link>
                    }
                        
                    </div>
                </div>
            </div>
        </div>
        );
}

export default ItemDetail;