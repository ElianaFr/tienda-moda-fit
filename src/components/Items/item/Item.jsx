import { Link } from "react-router-dom";

const Item = ({item}) => {
    const {id,product , price, stock, category, imagen, info} = item;
    console.log("item info",item)
    return (
        <div className="card shadow" style={{width: 200}}>
            <img src={imagen} className="card-img-top p-2" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{product} </h5>
                <p className="card-text">$ {price} .-</p>
                <Link to = {`item/${id}`}>
                    <button type="button" className="btn btn-success fw-bold">DETALLE</button>
                </Link>
                
            </div>
        </div>
        
        );
}

export default Item;