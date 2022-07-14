import React, {useState, useEffect} from "react"
import ItemList from "./ItemList";

const ItemListContainer = (prop) => {
    // listado de productos disponibles
    const ProductsData= [{
        "id": 1,
        "product": "Remera Deportiva",
        "price": 3600,
        "stock": 55,
        "categoria": "Remera",
        "imagen": "./assets/img/top deportivo.jpg"
    },
    {
        "id": 1,
        "product": "Top Deportivo",
        "price": 2300,
        "stock": 25,
        "categoria": "Tops",
        "imagen": "./assets/img/top deportivo.jpg"
 
    },
    {
        "id": 1,
        "product": "Calza Deportiva",
        "price": 4200,
        "stock": 10,
        "categoria": "Calza",
        "imagen": "./assets/img/top deportivo.jpg"
 
    },
    {
        "id": 1,
        "product": "Calza capri",
        "price": 3600,
        "stock": 18,
        "categoria": "Calza",
        "imagen": "./assets/img/top deportivo.jpg"

    },
    {
        "id": 1,
        "product": "Short Deportivo",
        "price": 2800,
        "stock": 17,
        "categoria": "Short",
        "imagen": "./assets/img/top deportivo.jpg"

    }];

    // variable para guardar el estado
    let [productos, setItems] = useState([]);
    // console.log("render itemListcontainer");
    // console.log(productos)

    useEffect(
        ()=>{
            // Generar una promesa para que cargue los datos de los productos que hay disponibles y mostrarlos
        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ProductsData);
            }, 2000);
        })
            // en esta parte se cumple la promesa
        promiseItems.then((respuesta)=>{
        setItems(ProductsData);
        })
    },
    []
)
    
    
    return ( 
        <ItemList productos = {productos}/>
        
    );
}

export default ItemListContainer;