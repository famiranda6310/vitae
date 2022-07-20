import react from "react";

export default function portafolio(){
    return(
        <>
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Portafolio
                                </h3>
                                <p className="subtitle-a">
                                    Aquí puedes ver los proyectos en los que he trabajado.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 work-box">
                            <div className="work-img">
                                <img src="src/img/work-1.jpg" alt="50%" className="img-fluid"></img>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Vista previa</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Dashboard</span> / <span
                                                className="w-date">05 julio 2022</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="#"> <span
                                                    className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <div className="work-img">
                                    <img src="src/img/work-2.jpg" alt="" className="img-fluid"></img>
                                </div>

                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Loreda Cuno Nere</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span
                                                className="w-date">18 Sep. 2018</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="#"> <span
                                                    className="bi bi-plus-circle"></span></a>
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
