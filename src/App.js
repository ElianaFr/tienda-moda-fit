import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import Promo from './components/Nav/Promo';
import ItemCount from './components/Items/ItemCount';


function App() {
  
  return (
    <>
      <Promo promo={"HASTA 6 CUOTAS SIN INTERES, ENVIO GRATIS DESDE $10000.-"}/>
      <NavBar />
      <ItemListContainer />
      {/* <ItemCount stock={10} initial={1} /> */}
    </>

    
  );
}

export default App;
