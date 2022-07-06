import LogoMf from "./LogoMf";
import MenuMf from "./Menu";
import "./navBar.css";


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <span className= "pe-2">  <img src="../Nav/logoMf.png" style={{width:40, height:40}}></img> MODA FIT
                </span>
                <LogoMf />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon ">
                        <MenuMf />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">REMERAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CALZAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TOPS DEPORTIVOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SHORTS</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;



