import react from "react";
import Typewriter from 'typewriter-effect';
import pexels from "../img/pexels.jpg"

export default function presentacion(){

        return(
        <>
            <div id="hero" className="hero route bg-image" style={{backgroundImage:`url(${pexels}`}}>
                <div className="overlay-itro"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className=" hero-title mb-4">Yo soy Fabián Miranda</h1>
                            <span className="typed hero-subtitle">
                                <Typewriter
                                    options={{
                                        strings: ['Programador Front-end', 'Ingeniero en Sistemas','Tecnico en Electronica de Control'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
