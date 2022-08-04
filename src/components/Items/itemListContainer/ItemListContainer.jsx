import React, {useState, useEffect} from "react"
import ItemList from "../itemList/ItemList";
import stock from "../utils/stock.json";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"



const ItemListContainer = () =>{
    const {categoria} = useParams();
    const [loading,setLoading] = useState(false);
    const [productos,setProductos] = useState ([]);


    useEffect(()=> {
    
        setLoading(true);
        const dataBase = getFirestore();
        const itemsCollection = collection(dataBase,"items");
        const resCollection = categoria
            ? query(itemsCollection,where("category","==",categoria)): itemsCollection;
        getDocs(resCollection).then ((snapshot)=> {
            const data= snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}));
            setProductos(data);
            setLoading(false);
        }) ;
        
        
    },[categoria]);
    
    if (loading) return <Spinner />;
    return(
        <>
        <ItemList productos = {productos}/>
        
        </>
    )
}

export default ItemListContainer;






