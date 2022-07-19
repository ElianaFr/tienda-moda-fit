import Item from "./Item";


const ItemList  =({productos}) => {

    return (
        <>
            <p className="text-center">PRODUCTOS</p>
                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-4 g-4 ">
                            
                        {productos.map((item)=>(
                            <div key= {item.id} className="col mb-4 ">
                                <Item item={item}/>
                            </div>    
                        ))}
                    </div>
                </div>
        </>
    );
};

export default ItemList;

                        
                        {/* return(
                                    
                                        <div className="card shadow" style={{width: 200}}>
                                            <img src={ProdList.imagen} className="card-img-top p-2" alt="..."/>
                                            <div className="card-body text-center">
                                                <h5 className="card-title" key={ProdList.id} >{ProdList.product} </h5>
                                                <p className="card-text">$ {ProdList.price} .-</p>
                                                <button type="button" className="btn btn-success fw-bold">DETALLE</button>
                                            </div>
                                        </div>
                                    </div>

                        )
                    }
                )
                }
                                </div>
                            </div>    
        </>
        
    );
}

export default ItemList; */}