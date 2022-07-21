import './App.css';
import NavBar from './components/Nav/navBar/NavBar';
import ItemListContainer from './components/Items/itemListContainer/ItemListContainer';
import Promo from './components/Nav/promo/Promo';
import ItemDetailContainer from "./components/Items/itemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App() {
  
  return (
    <>

    <BrowserRouter>
      <Promo promo={"HASTA 6 CUOTAS SIN INTERES, ENVIO GRATIS DESDE $10000.-"}/>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='*' element= {<h1 className='text-center'> ERROR 404-Página no encontrada</h1>}/>
        <Route path='/category/:categoria' element={<ItemListContainer />}/>
        <Route path='item/:id' element={<ItemDetailContainer/>} />
      </Routes>
      
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
