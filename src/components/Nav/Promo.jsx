const Promo = (prop) => {
    return (
        <div className="bg-black mb-0">
            <p className="txtPromo text-center mb-0"><i className="bi bi-truck truck me-2"></i>{prop.promo}</p>
        </div>
        
    );
}

export default Promo;