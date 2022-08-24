import { Link } from "react-router-dom";
import "../item/item.css"

const Item = ({item}) => {
    const {id,product , price, stock, category, imagen, info} = item;
    
    return (
        <div className="card shadow trans" >
            <img src={imagen} className="card-img-top p-2" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{product} </h5>
                <p className="card-text price">$ {price} .-</p>
                <p className="card-text cuotas">
                <i className="bi bi-credit-card m-2"></i>
                6 CUOTAS SIN INTERES</p>
                <Link to = {`/item/${id}`}>
                    
                    <button type="button" className="btn btn-dark">
                        VER <i className="bi bi-eye-fill p-1 "></i>
                    </button>
                    
                </Link>

                
            </div>
        </div>
        
        );
}

export default Item;