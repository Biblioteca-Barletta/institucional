import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

//Importado de pantallas
import Inicio from "./Components/Inicio/Inicio";
import Navbar from './Components/Navbar/Navbar'
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* <Route path="/biblioteca" element={<Navbar />} /> */}
          {/* <Route path="/catalogo" element={<Navbar />} /> */}
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
