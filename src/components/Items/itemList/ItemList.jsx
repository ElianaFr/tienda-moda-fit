import Item from "../item/Item";
import "../itemList/itemList.css";


const ItemList  =({productos}) => {

    return (
        <>
            <div className="flyer">
                <img className="flyer" src="../assets/img/flyer.png" ></img>

            </div>
            <div className="tit">
                <h3 className="text-center prod"> CATALOGO DE PRODUCTOS</h3>
            </div>
            
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

