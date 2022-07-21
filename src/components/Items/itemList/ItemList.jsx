import Item from "../item/Item";


const ItemList  =({productos}) => {
console.log("info productos itemlist",productos)
    return (
        <>
            <p className="text-center">PRODUCTOS</p>
                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-4 g-4 ">
                            
                        {productos.map((item)=>(
        
                            <div key={item.id} className="col mb-4 ">
                                
                                <Item item={item} />
                                
                            </div>    
                        ))}
                    </div>
                </div>
        </>
    );
};

export default ItemList;

