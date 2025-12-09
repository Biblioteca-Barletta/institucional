import React from 'react'
import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";
import logoBarletta from "../../assets/images/logoBarletta.png"
import { useState } from 'react';
import Header from '../Header/Header';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Header />
        <nav className="bg-azul pr-4 w-full z-50 border-b-4 border-b-rojo">
            <div className="flex justify-between items-center md:justify-start h-full">
                <Link to={"/"}>
                    <img className="imgLogo md:hidden" src={logoBarletta} alt="Logo" />
                </Link>
                <div className="md:hidden">
                    <button
                        type="button"
                        className="block text-gray-400 hover:text-white focus:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <span className="block h-1 w-6 bg-blanco mb-1"></span>
                        <span className="block h-1 w-6 bg-blanco mb-1"></span>
                        <span className="block h-1 w-6 bg-blanco"></span>
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm16 5H4a1 1 0 100 2h16a1 1 0 100-2zm0 5H4a1 1 0 110-2h16a1 1 0 110 2z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                            />
                        )}

                    </button>
                </div>
                <div className="hidden md:block mr-5 ml-5">
                    <ul className='w-full flex justify-start items-center mr-5 ml-5'>
                        <li>
                            <NavLink to={"/"} className="text-blanco font-bold mr-1 md: ml-7 py-3">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            {/* <NavLink to={"/biblioteca"} className="text-blanco font-bold ml-1 mr-1 md: ml-7 my-3">
                                La biblioteca
                            </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to={"/catalogo"} className="text-blanco font-bold ml-1 mr-1 md: ml-7 my-3">
                                Catálogo
                            </NavLink> */}
                        </li>
                        <li>
                            <NavLink to={"/proyectos"} className="text-blanco font-bold ml-1 mr-1 md: ml-7 my-3">
                                Proyectos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contacto"} className="text-blanco font-bold ml-1 mr-1 md: ml-7 my-3">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            {
                isOpen && (
                    <div className="md:hidden mt-2">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <ul className='justify-between items-center mr-5 ml-5'>
                                <li>
                                    <NavLink to={"/"} className="text-blanco font-bold">
                                        Inicio
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={"/biblioteca"} className="text-blanco font-bold">
                                        La biblioteca
                                    </NavLink> 
                                </li> */}
                                {/* <li>
                                    <NavLink to={"/catalogo"} className="text-blanco font-bold">
                                        Catálogo
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={"/proyectos"} className="text-blanco font-bold">
                                        Proyectos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contacto"} className="text-blanco font-bold">
                                        Contacto
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
        </>
    );
};

export default Navbar;
