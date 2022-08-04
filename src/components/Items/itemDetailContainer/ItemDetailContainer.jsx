import React, {useState, useEffect} from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import stock from "../utils/stock.json"
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";
import {getDoc,doc, getFirestore} from "firebase/firestore"



const ItemDetailContainer = () =>{
    const {id} = useParams();
    console.log("id seleccion",id)

    const [loading,setLoading] = useState(false);
    const [productos,setProductos] = useState ({});
    
    useEffect(()=> {
        setLoading(true);
        const dataBase = getFirestore();
        const docRef = doc(dataBase,"items", id);
        
        getDoc(docRef).then((snapshot) => {
            const data = {id:snapshot.id,...snapshot.data()};
            setProductos(data);
            setLoading(false)
        });
        },[id]);
        
        

    if(loading) return <Spinner />

    return(
        <>
        <ItemDetail productos= {productos}/>
        
        </>
    )
}

export default ItemDetailContainer;

