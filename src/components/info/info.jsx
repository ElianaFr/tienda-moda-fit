import "../info/info.css"

const Info = ()=>{
    return(
        <>
            <div className="infoPie d-sm-none d-md-block">
                <ul className="infoList ">
                    <li className="list">
                        <i className="bi bi-truck "></i>
                        <span className="text">Realizamos envios a todo el país</span>
                    </li>
                    <li className="list">
                        <i className="bi bi-credit-card"></i>
                        <span className="text">3 y 6 cuotas sin interes</span>
                    </li>
                    <li className="list">
                        <i className="bi bi-arrow-repeat "></i>
                        <span className="text">Primer cambio sin costo</span>
                    </li>
                            
                </ul>
            </div>
        </>
    );
};
export default Info;