import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../itemDetail/itemDetail.css";

const ItemDetail = ({productos,props}) => {
    
    const {id,product, price, stock, category, imagen, info}= productos

    const [cantidad,setCantidad] = useState(0)
    
    const {addItem} = useContext(CartContext);
    
    
    const onAdd= (cantidad) => {
        setCantidad(cantidad);
        addItem(productos,cantidad);
        toast.success(`🚀 ${cantidad} productos se agregaron al carrito`, {
            position: "bottom-right",
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
        <div className="container mt-5 mb-5">
            <p className="text-center fs-5 mb-5 titulo">DETALLE DEL PRODUCTO</p>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="p-3">
                                    <div className="text-center p-4"> 
                                        <img src={imagen} width="250" /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                        <div className="d-flex align-items-center"> 
                                            <Link to="/">
                                                <button type="button" className="btn btn-warning btn-sm">
                                                    <i className="bi bi-arrow-return-left iconArrow "></i> 
                                                </button> 
                                            </Link>
                                            
                                        </div> 
                                        <Link to="/cart">
                                            <i className="bi bi-cart iconCart"></i>
                                        </Link>
                                            
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <h5 className="text-uppercase mb-3 product ">{product}</h5>
                                        <div className="d-flex flex-row align-items-center">
                                            <span className=" mb-4 price "> $ {price}.-</span>
                                        </div>
                                        
                                        <p className=" mb-4 info">{info}</p>    
                                    </div>
                                    <div className=" d-flex flex-row align-items-center">
                                            <span className=" mb-4">Cantidad seleccionada: {cantidad}</span>
                                    </div>
                                    
                                    <div className="mt-4 align-items-center">
                                        {cantidad == 0 ? (
                                            <ItemCount stock={stock} initial={0} onAdd={onAdd} />) :
                                            (<ToastContainer></ToastContainer>)
                                        }
                        
                    
                                        <div className="mb-2">
                                            {(cantidad > 0) &&
                                                <>
                                                    <Link to="/cart">
                                                        <button type="button" className="btn btn-secondary btn-sm me-4">
                                                            Finalizar compra
                                                        </button> 
                                                    </Link>
                                                    <Link to="/">
                                                        <button type="button" className="btn btn-primary btn-sm"> 
                                                        Continuar comprando
                                                    </button> 
                                                    </Link>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;