import { useState } from 'react'
import './css/App.css'
import NadvarPagina from "./componentes/NadvarPagina";
import Presentacion from "./componentes/Presentacion";
import Informacion from "./componentes/informacion";
import FooterPie from "./componentes/Footerpie";
import Servicios from "./componentes/Servicios";
import Portafolio from "./componentes/Portafolio"

function App() {

  return (
    <>
        <NadvarPagina/>
        <Presentacion/>
        <Informacion/>
        <Servicios/>
        <Portafolio/>
        <FooterPie/>
    </>
  )
}

export default App
