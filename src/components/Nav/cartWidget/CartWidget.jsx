import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartWidget = () => {
    const {cartItems,cantItems} = useContext(CartContext);
    const cantidad = cantItems()
    
    return ( 
        <>   
        {cartItems.length === 0 ? (
            <></>
        ) : (
            
                <span >
                    <i className="bi bi-bag-heart-fill cart" > {cantidad}             
                    </i>
                </span>
            
            
        )}
        </>
    );
}

export default CartWidget;