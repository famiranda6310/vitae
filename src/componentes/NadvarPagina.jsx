import react, {useEffect, useState} from "react";

export default function NadvarPagina(){
    const [Nadvar,setNadvar]=useState(false);

    useEffect(()=>{
        const changeBacgroud = () =>{
            if(window.scrollY >= 80){
                setNadvar(true);
            } else {
                setNadvar(false);
            }
        }
        window.addEventListener('scroll', changeBacgroud);
    })

    return(
        <>
            <nav className={ Nadvar ?`navbar navbar-dark navbar-expand-lg navbar-scroll fixed-top movimientogris`:'navbar navbar-dark navbar-expand-lg navbar-scroll fixed-top gris'} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fabian Miranda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#hero"><i
                                    className="bi bi-house"></i> Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><i className="bi bi-file-person"></i> Sobre mi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#services"><i className="bi bi-receipt"></i> Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#work"><i className="bi bi-briefcase"></i> Portafolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
