import "../footer/footer.css"
const Footer = ()=>{
    return(
        <>
            <footer>
                <div className="footer text-center">
                    <p className="text-center redes"> SEGUINOS EN NUESTRAS REDES SOCIALES</p>
                    <i className="bi bi-google icon"></i>
                    <i className="bi bi-twitter icon"></i>
                    <i className="bi bi-facebook icon"></i>
                    <i className="bi bi-instagram icon"></i>
                </div>
                <div className="footerPie">
                    <p className="pie text-center">DESING BY LEF 2022 Ⓒ</p>
                </div>
            </footer>
        </>
    );
};
export default Footer;