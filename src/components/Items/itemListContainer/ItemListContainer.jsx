import React, {useState, useEffect} from "react"
import ItemList from "../itemList/ItemList";
import stock from "../utils/stock.json";
import { useParams } from "react-router-dom";

function getItem(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(stock)
        },1000);
    });
}

const ItemListContainer = () =>{
    const {categoria} = useParams();
    console.log(categoria)

    const [productos,setItems] = useState ([]);

    useEffect(()=> {
            
        console.log("se vuelve a ejecutar")
        
        getItem().then((res) => {
            const itemProd = res;
            console.log(itemProd)
        
            if(categoria){
                setItems(itemProd.filter((articulos) => articulos.category == categoria))
                console.log("array filtrado",itemProd)
            }else{
                setItems(itemProd)
            }
            
        }
        
        );
    },[categoria]);
    return(
        <>
        <ItemList productos = {productos}/>
        
        </>
    )
}

export default ItemListContainer;

