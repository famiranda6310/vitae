import react from "react";

export default function Servicios(){
    return(
        <>
            <section id="services" className="services-mf pt-5 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Servicios
                                </h3>
                                <p className="subtitle-a">
                                    ¿Qué puedo hacer por usted o su negocio?
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-phone"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Full Responsive</h2>
                                    <p className="s-description text-center">
                                        Su sitio se mostrará en cualquier dispositivo,
                                        incluidas computadoras de escritorio,
                                        tabletas y teléfonos móviles.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-pencil-square"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Diseño Creativo</h2>
                                    <p className="s-description text-center">
                                        Un buen y atractivo diseño web lo ayuda a
                                        mantener sus clientes potenciales en su sitio,
                                        que es la cara digital de su negocio.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-code-slash"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Desarrollo</h2>
                                    <p className="s-description text-center">
                                        Conozco la importancia del diseño web y puedo
                                        ayudarte a crear un sitio web que te encantará.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-hand-thumbs-up"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Integración de redes sociales</h2>
                                    <p className="s-description text-center">
                                        Existen muchas plataformas sociales,
                                        y debe promocionar su presencia en
                                        ellas en su sitio web.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-speedometer2"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Desempeño</h2>
                                    <p className="s-description text-center">
                                        Retener a los usuarios es crucial
                                        para mejorar las conversiones.
                                        Los sitios de alto rendimiento
                                        atraen y retienen a los usuarios
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-google"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">SEO</h2>
                                    <p className="s-description text-center">
                                        Optimizaré su sitio con una estrategia
                                        inteligente de optimización de motores de
                                        búsqueda para generar clientes potenciales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
