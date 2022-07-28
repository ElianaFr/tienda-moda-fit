import LogoMf from "../logo/LogoMf";
import MenuMf from "../menu/Menu";
import "./navBar.css";
import Cart from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded ">
            <div className="container">
                <span className= "logo">  <LogoMf /> MODA FIT</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <MenuMf />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">PRODUCTOS</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/remera">REMERAS</Link> 
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/calzas">Calzas</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/tops">TOPS DEPORTIVOS </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/SHORT">SHORT</Link>
                        </li>
                        
                    </ul>
                    <Cart />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;



