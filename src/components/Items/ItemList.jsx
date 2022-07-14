
const ItemList  =(props) => {
    console.log("render ItemsList", props.productos)

    return (
        <>
                <p className="text-center">PRODUCTOS</p>
                <div class="container mt-4">
                    <div className="row row-cols-1 row-cols-md-4 g-4 ">
                            
                {
                    props.productos.map((ProdList)=>{
                        return(
                                    <div className="col mb-4 ">
                                        <div className="card shadow" style={{width: 200}}>
                                            <img src={ProdList.imagen} className="card-img-top p-2" alt="..."/>
                                            <div className="card-body text-center" key={ProdList.id}>
                                                <h5 className="card-title">{ProdList.product}</h5>
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

export default ItemList;