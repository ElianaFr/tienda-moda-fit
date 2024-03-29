import React, { useState } from "react";


const ItemCount = ({initial= 0, stock, onAdd}) => {
    const [count,setCount] = useState(initial);
    
    
    const handleSuma = ()=>{
        if(count < stock )
        setCount(count+1)
    }
    const handleResta = () => {
        if(count > 0)
        setCount(count-1)
    }
    

    return(
                <div className="col-md-6 mx-auto">
                    <div className="pb-4 pt-2 ">
                        <button onClick={handleResta} type="button" className="btn btn-danger btn-sm m-1 pt-1 pb-1 btnColor"> - </button>
                        <span className="m-2">{count}</span>
                        <button onClick={handleSuma} type="button" className="btn btn-success btn-sm m-1 pt-1 pb-1"> + </button>
                    </div>
                    <div className="mb-2">
                        {(count >0)&&
                        <button type="button" className="btn btn-info  " disabled={count === "" || count === 0} onClick ={() => {onAdd(count) }}> AGREGAR </button>
                        
                        }
                        
                    </div>
                    
                </div> 
            
    )


}
export default ItemCount