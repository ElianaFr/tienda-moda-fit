import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../contexts/CartContext";


const OrderDetail = ()=>{
    const {cartItems} = useContext(CartContext)
    

    const [formValue,setFormValue]= useState({
        name: "",
        phone: "",
        email: "",
    });
    const [order, setOrder]= useState({
        buyer: {},
        items: cartItems,
        total:"",
    })



    const handleSubmit =(e) => {
        e.preventDefault()
        console.log("prevent",formValue)
        setOrder({...order, buyer:formValue})
        
    }
    const handleChange = (e)=>{
    
        setFormValue({...formValue,[e.target.name]: e.target.value})
    }

    return(
        <>  
            <div className="container">
                <p>DATOS DEL CLIENTE</p>
                {console.log("order",order)}
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        name="name"
                        className="form-control m-2" 
                        placeholder="Nombre"
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="number" 
                        name="phone"
                        className="form-control m-2" 
                        placeholder="Celular"
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        name="email"
                        value={formValue.email}
                        className="form-control m-2" 
                        placeholder="Email"
                        onChange={handleChange}
                        />
                    <button 
                        type="submit" className="btn btn-secondary mt-4" >ENVIAR</button>
                    
                </div>
            </form>





            </div>
        </>
        
    )
}
export default OrderDetail;