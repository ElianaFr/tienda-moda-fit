const ItemListContainer = (prop) => {
    return ( 
        <div className="container px-5 py-8 mx-auto" >
            <div className="flex flex-col text-center mb-12">
                <p>{prop.saludo}</p>
            </div>
            
        </div>
        
    );
}

export default ItemListContainer;