import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import Promo from './components/Nav/Promo';


function App() {
  
  return (
    <>
      <Promo promo={"HASTA 6 CUOTAS SIN INTERES, ENVIO GRATIS DESDE $10000.-"}/>
      <NavBar />
      <ItemListContainer saludo={"PROXIMAMENTE ARTICULOS"}/>
    </>

    
  );
}

export default App;
