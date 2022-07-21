import ItemCount from "../itemCount/ItemCount";
const ItemDetail = ({productos}) => {
    console.log("data de la promesa", productos)
    return (
        <div className="card shadow" style={{width: 200}}>
            <img src={productos.imagen} className="card-img-top p-2" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{productos.product} </h5>
                <p className="card-text">$ {productos.price} .-</p>
                <p className="card-text"> {productos.info}</p>
                <ItemCount stock={productos.stock} initial={1} />
            
            </div>
        </div>
        
        );
}

export default ItemDetail;