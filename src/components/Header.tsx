import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full">
                <nav className="bg-white shadow-md rounded-xl m-4 p-3 flex items-center justify-between px-6 ">
                    <div>
                        <img src="img/logo-sequentia.jpg" alt="Sequentia_Logo" className="h-6" />
                    </div>

                    {/* Menú principal visible en pantallas grandes */}
                    <ul className="hidden md:flex space-x-6 text-gray-700 text-base font-semibold">
                        <li><Link to="/" className="text-black hover:text-blue-600">Nosotros</Link></li>
                        <li><Link to="/Esquelas" className="text-black hover:text-blue-600">Esquelas</Link></li>
                        <li><Link to="/TestamentoSocial" className="text-black hover:text-blue-600">Testamento</Link></li>
                        <li><Link to="https://sequentia.app/blog/bienvenido/" className="text-black hover:text-blue-600">Blog</Link></li>
                        <li><Link to="/Proximamente" className="text-black hover:text-blue-600">Comunidad</Link></li>
                    </ul>

                    {/* Botón del menú hamburguesa visible en pantallas pequeñas */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col space-y-1 focus:outline-none dark:text-black dark:bg-gray-200"
                    >
                        <span className="block w-6 h-0.5 bg-gray-700"></span>
                        <span className="block w-6 h-0.5 bg-gray-700"></span>
                        <span className="block w-6 h-0.5 bg-gray-700"></span>
                    </button>

                    {/* Menú desplegable en pantallas pequeñas */}
                    {menuOpen && (
                        <div className="absolute mt-4 rounded-lg top-16 left-0 mx-4 w-full bg-white flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
                            <Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Nosotros</Link>
                            <Link to="/Esquelas" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Esquelas</Link>
                            <Link to="/TestamentoSocial" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Testamento</Link>
                            <Link to="https://sequentia.app/blog/bienvenido/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Blog</Link>
                            <Link to="/Proximamente" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Comunidad</Link>
                        </div>
                    )}

                    {/* Parte derecha con iconos de perfil y opciones */}
                    <div className="flex items-center space-x-4 ">
                        <a href="/perfil" className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5A3.75 3.75 0 1 1 12 3.75a3.75 3.75 0 0 1 3.75 3.75zM18.75 21a7.5 7.5 0 1 0-13.5 0"></path>
                            </svg>
                        </a>

                        <section className="relative">
                            <button className="dark:text-black dark:bg-gray-300 flex items-center space-x-1 p-2 rounded-lg hover:bg-black focus:outline-none">
                                <svg className="w-6 h-6 rounded-full" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#ffda44" />
                                    <path fill="#d80027" d="M0 144h512v224H0z" />
                                </svg>

                                <span>&#9662;</span>
                            </button>

                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg hidden">
                                <ul className="py-2">
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Catalán</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Castellano</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Inglés</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
