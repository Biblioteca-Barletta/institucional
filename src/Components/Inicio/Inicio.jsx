import React from 'react'
import "./Inicio.css"
import logoBarletta from "../../assets/images/logoBarlettaGrande.png"
import Navbar from '../Navbar/Navbar'

const Inicio = () => {
    return (
        <>
            <Navbar />
            <div className="contenedorLogo bg-azulSuave flex justify-center max-md w-full">
                <img src={logoBarletta} alt="logo barletta" className='logoBarletta'/>
            </div>
        </>
    )
}

export default Inicio
