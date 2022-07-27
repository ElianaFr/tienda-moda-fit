import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({initial, stock, actualizarCant}) => {
    const [count,setCount] = useState(0);
    
    
    const handleSuma = ()=>{
        if(count < stock )
        setCount(count+1)
    }
    const handleResta = () => {
        if(count > 0)
        setCount(count-1)
    }
    const inputCount = (elemento) => {
        console.log(elemento.target.value)
        const {value} = elemento.target;
        if (value <= stock){
            setCount(isNaN(value) ? 0 : parseInt(value));
        }
    }
    const onAddItem= (count) =>{
        console.log(count)
        setCount(count)
        actualizarCant(count)
        toast.success(`🚀 ${count} productos se agregaron al carrito`, {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
        
    }

    return(
                <div>
                    <div className="pb-4 pt-2">
                        <button onClick={handleResta} type="button" className="btn btn-secondary btn-sm m-1 pt-1 pb-1">-</button>
                        
                        <input className="border-primary " style={{width:40}} onChange={(elemento)=> inputCount(elemento)} value={count} type= "number"></input>
                        
                        <button onClick={handleSuma} type="button" className="btn btn-primary btn-sm m-1 pt-1 pb-1">+</button>
                    </div>
                    <div className="mb-2">
                        
                        <button type="button" className="btn btn-success btn-sm" disabled={count === "" || count === 0} onClick ={() => {onAddItem(count) }}  >Agregar al carrito</button>
                        <ToastContainer />
                    </div>
                    
                </div> 
            
    )


}
export default ItemCount