import React, { useState } from "react";

function ItemCount(props){
    const [count,setCount] = useState(props.initial);

    function handleSuma() {
        if(count < props.stock )
        setCount(count+1)
    }
    function handleResta() {
        if(count > 0)
        setCount(count-1)
    }

    return(
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center mb-12">
                <span>SELECTOR DE CANTIDAD</span>
                <div>
                    <div className="pb-4 pt-2">
                        <button onClick={handleResta} type="button" className="btn btn-secondary btn-sm m-1 pt-1 pb-1">-</button>
                        <span className="p-4">{count}</span>
                        <button onClick={handleSuma} type="button" className="btn btn-primary btn-sm m-1 pt-1 pb-1">+</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success btn-sm" >Agregar al carrito</button>
                    </div>
                </div>
            </div>

        </div>
    )


}
export default ItemCount