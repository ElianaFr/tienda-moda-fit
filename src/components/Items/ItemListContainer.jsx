import React, {useState, useEffect} from "react"
import ItemList from "./ItemList";
import stock from "./utils/stock.json"


const ItemListContainer = () =>{
    const [productos,setItems] = useState ([]);
    // se crea una promesa para simular un llamado a los datos
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(stock)}, 2000);
    });

    useEffect(()=> {
        promesa.then((res) => setItems(stock));
    },[]);
    return(
        <>
        <ItemList productos = {productos}/>
        
        </>
    )
}

export default ItemListContainer;

