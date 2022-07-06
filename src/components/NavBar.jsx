import LogoMf from './logo';
const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className= "pr-2">MODA FIT</span>
                <LogoMf/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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



