import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/biblioteca" element={<Navbar />} />
          <Route path="/catalogo" element={<Navbar />} />
          <Route path="/proyectos" element={<Navbar />} />
          <Route path="/contacto" element={<Navbar />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
