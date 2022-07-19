const Item = ({item}) => {
    
    return (
        <div className="card shadow" style={{width: 200}}>
            <img src={item.imagen} className="card-img-top p-2" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{item.product} </h5>
                <p className="card-text">$ {item.price} .-</p>
                <button type="button" className="btn btn-success fw-bold">DETALLE</button>
            </div>
        </div>
        
        );
}

export default Item;