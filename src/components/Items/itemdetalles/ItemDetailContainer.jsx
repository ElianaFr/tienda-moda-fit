import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import stock from "../utils/stock.json"

function getItem(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000);
    });
}


const ItemDetailContainer = () =>{
    const [productos,setItems] = useState ([]);
    
    useEffect(()=> {
        getItem().then((res) => setItems(res[0]));
    },[]);
    return(
        <>
        <ItemDetail productos= {productos}/>
        
        </>
    )
}

export default ItemDetailContainer;

