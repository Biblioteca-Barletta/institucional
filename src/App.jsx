import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

//Importado de pantallas
import Inicio from "./Components/Inicio/Inicio";
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/biblioteca" element={<Navbar />} />
          <Route path="/catalogo" element={<Navbar />} />
          <Route path="/proyectos" element={<Navbar />} />
          <Route path="/contacto" element={<Navbar />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
