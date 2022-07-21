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
        <Route path='/category/:categoria' element={<ItemListContainer />}/>
        <Route path='/detail' element={<ItemDetailContainer/>}/>
        <Route path='/' element={<ItemListContainer />}/>  
      </Routes>
      
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
