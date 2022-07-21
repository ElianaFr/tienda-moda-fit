import React, {useState, useEffect} from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import stock from "../utils/stock.json"
import { useParams } from "react-router-dom";


function getItem(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000);
    });
}


const ItemDetailContainer = () =>{
    const {id} = useParams();
    console.log("id seleccion",id)

    const [productos,setItems] = useState ({});
    
    useEffect(()=> {
        
        
        getItem().then((res) => {
            
            const itemSel = res.filter(articulo => articulo.id== id);
            console.log(itemSel)
            setItems(itemSel[0]);
            
        });
        
    },[]);
    return(
        <>
        <ItemDetail productos= {productos}/>
        
        </>
    )
}

export default ItemDetailContainer;

