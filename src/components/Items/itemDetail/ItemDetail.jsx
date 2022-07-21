import ItemCount from "../itemCount/ItemCount";



const ItemDetail = ({productos}) => {
    console.log("data de la promesa de itemdetailcontainer", productos)
    const {id,product, price, stock, category, imagen, info}= productos
    return (
        <div className="card shadow" style={{width: 200}}>
            <img src={imagen} className="card-img-top p-2" alt="..."/>
            <div className="card-body text-center">
                <span>{id}</span>
                <h5 className="card-title">{product} </h5>
                <p className="card-text">$ {price} .-</p>
                <p className="card-text"> {info}</p>
                <ItemCount stock={stock} initial={1} />
            
            </div>
        </div>
        
        );
}

export default ItemDetail;