import './App.css';
import NavBar from './components/Nav/navBar/NavBar';
import ItemListContainer from './components/Items/itemListContainer/ItemListContainer';
import Promo from './components/Nav/promo/Promo';
import ItemDetailContainer from "./components/Items/itemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import CartProvider from './components/contexts/CartContext';
import Cart from './components/cart/Cart';
import Footer from './components/footer/footer';
import Info from './components/info/info';

function App() {
  
  
  return (
    <>
      <CartProvider>
      
        <BrowserRouter>
          <Promo promo={"HASTA 6 CUOTAS SIN INTERES, ENVIO GRATIS DESDE $10000.-"}/>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='*' element= {<h1 className='text-center'> ERROR 404-Página no encontrada</h1>}/>
            <Route path='/category/:categoria' element={<ItemListContainer />}/>
            <Route path='item/:id' element={<ItemDetailContainer/>} />
            <Route path= '/cart' element={<Cart/>}/>
            <Route path= '/' element={<Cart/>}/>
          </Routes>
          <Info/>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </>

    
  );
}

export default App;
