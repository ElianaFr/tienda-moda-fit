import LogoMf from "./LogoMf";
import MenuMf from "./Menu";
import "./navBar.css";


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded ">
            <div className="container">
                <span className= "logo">  <LogoMf /> MODA FIT
                </span>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler">
                        <MenuMf />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mt-1 mb-2 mb-lg-0">
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



