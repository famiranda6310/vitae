import react from "react";
import foto from "../img/foto.jpg"


export default function informacion(){
    return(
        <>
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src={foto}
                                                         className="img-fluid rounded b-shadow-a" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                    <p><span className="title-s">Nombre: </span>
                                                        <span>Ronaldo Fabian Miranda Aguiar</span></p>
                                                    <p><span className="title-s">Titulo: </span>
                                                        <span>Ingeniero en Sistemas Computacionales</span></p>
                                                    <p><span className="title-s">Perfil: </span> <span>Front-end Junior</span>
                                                    </p>
                                                    <p><span className="title-s">Email: </span>
                                                        <span>romiranda6310@gmail.com</span></p>
                                                    <p><span className="title-s">Celular: </span>
                                                        <span>0985515770</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Habilidad</p>
                                            <span>HTML</span> <span className="pull-right">85%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "85%"}}
                                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>CSS3</span> <span className="pull-right">75%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "75%"}}
                                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>React</span> <span className="pull-right">50%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "50%"}}
                                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>JAVASCRIPT</span> <span className="pull-right">70%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "70%"}}
                                                     aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>React-Bootstrap</span> <span className="pull-right">50%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "50%"}}
                                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Ant Design</span> <span className="pull-right">10%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "10%"}}
                                                     aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Sobre mí
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                Actualmente diseño y programo nuevos proyectos y sitios de
                                                aplicaciones web, ya sea del lado del cliente Front-end.
                                                Continuamente aprendiendo y adquiriendo nuevos conocimientos en función a las actuales y futuras
                                                demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.
                                                Soy una persona apasionado en la programación y cada día queriendo ser mejor programador
                                            </p>
                                            <div className="col-md-12 text-center">
                                                <a href="src/docs/CurriculoVitae.pdf" target="_blank"><button className="button button-a button-big button-rouded">Curriculo Vitae</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}





