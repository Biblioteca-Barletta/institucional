import React from 'react'
import "./Header.css"
import logoHeader from "../../assets/images/logoHeader.png"

const Header = () => {
    return (
        <>
            <header className='max-md:hidden bg-blanco w-full flex items-center text-left'>
                <img src={logoHeader} alt="logo header" />
                <div className='w-2/3'>
                    <h1 className='font-bold text-azul text-5xl leading-normal'>Biblioteca Popular Sanlorencista "Leónidas Barletta"</h1>
                </div>
            </header>
        </>
    )
}

export default Header