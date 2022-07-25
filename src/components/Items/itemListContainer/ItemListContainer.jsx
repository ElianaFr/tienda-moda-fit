import React, {useState, useEffect} from "react"
import ItemList from "../itemList/ItemList";
import stock from "../utils/stock.json";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";


function getItem(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000);
    });
}

const ItemListContainer = () =>{
    const {categoria} = useParams();
    console.log(categoria)
    const [loading,setLoading] = useState(false);
    const [productos,setItems] = useState ([]);

    useEffect(()=> {
        setLoading(true)
        console.log("se vuelve a ejecutar")
        
        getItem().then((res) => {
            const itemProd = res;
            console.log("respuesta de la promesa",itemProd)
        
            if(categoria){
                setItems(itemProd.filter((elemento) => elemento.category == categoria))
                console.log("array filtrado",itemProd)
            }else{
                setItems(itemProd)
            }
            setLoading(false)
        });
    },[categoria]);
    
    if (loading) return <Spinner />;
    return(
        <>
        <ItemList productos = {productos}/>
        
        </>
    )
}

export default ItemListContainer;

