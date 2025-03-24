import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
            <header className="fixed top-0 left-0 w-full">
                <nav className="bg-white shadow-md rounded-xl m-4 p-3 flex items-center justify-between px-6">
                
                    <div>
                        <img src="img/logo-sequentia.jpg" alt="Sequentia_Logo" className="h-6"/> 
                    </div>
                    <p>Otra prueba</p>
                
                    <ul className="flex space-x-6 text-gray-700">
                        <li><Link to="/" className="hover:text-blue-600">Nosotros</Link></li>
                        <li><Link to="/Esquelas" className="hover:text-blue-600">Esquelas</Link></li>
                        <li><Link to="/TestamentoSocial" className="hover:text-blue-600">Testamento</Link></li>
                        <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-600">Comunidad</a></li>
                    </ul>
                    
                    <div className="flex items-center space-x-4">
                        
                        <a href="/perfil" className="flex items-center space-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5A3.75 3.75 0 1 1 12 3.75a3.75 3.75 0 0 1 3.75 3.75zM18.75 21a7.5 7.5 0 1 0-13.5 0"></path>
                        </svg>
                        </a>
                    
                        <section className="relative">
                        <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-300 focus:outline-none">
                            <svg className="w-6 h-6 rounded-full" viewBox="0 0 512 512">
                            <circle cx="256" cy="256" r="256" fill="#ffda44"/>
                            <path fill="#d80027" d="M0 144h512v224H0z"/>
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
