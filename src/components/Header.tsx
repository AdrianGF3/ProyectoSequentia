import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { User, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const getFlagSrc = (lang: string): string => {
        switch (lang) {
            case 'es':
            case 'en':
                return `/img/${lang}.svg`;
            case 'ca':
            default:
                return `/img/${lang}.png`;
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="bg-white shadow-md rounded-xl m-4 p-3 flex items-center justify-between px-6">
                <div>
                    <Link to="/"><img src="img/logo-sequentia.jpg" alt="Sequentia_Logo" className="h-6" /></Link>
                </div>

                {/* Menú en escritorio */}
                <ul className="hidden md:flex space-x-6 text-gray-700 text-base font-semibold">
                    <li><Link to="/" className="text-black hover:text-blue-600">{t('menu.about')}</Link></li>
                    <li><Link to="/Esquelas" className="text-black hover:text-blue-600">{t('menu.obituaries')}</Link></li>
                    <li><Link to="/TestamentoSocial" className="text-black hover:text-blue-600">{t('menu.testament')}</Link></li>
                    <li><Link to="https://sequentia.app/blog/bienvenido/" className="text-black hover:text-blue-600">{t('menu.blog')}</Link></li>
                    <li><Link to="/Proximamente" className="text-black hover:text-blue-600">{t('menu.community')}</Link></li>
                </ul>

                {/* Botón hamburguesa para móvil */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden dark:bg-gray-100 flex flex-col space-y-1 focus:outline-none"
                >
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                </button>

                {/* Menú móvil */}
                {menuOpen && (
                    <div className="absolute mt-4 rounded-lg top-16 left-0 mx-4 w-full bg-white flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
                        <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t('menu.about')}</Link>
                        <Link to="/Esquelas" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t('menu.obituaries')}</Link>
                        <Link to="/TestamentoSocial" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t('menu.testament')}</Link>
                        <Link to="https://sequentia.app/blog/bienvenido/" className="hover:text-blue-600">{t('menu.blog')}</Link>
                        <Link to="/Proximamente" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t('menu.community')}</Link>
                    </div>
                )}

                {/* Iconos a la derecha */}
                <div className="flex items-center space-x-4">
                    <Link to="/Proximamente" className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5A3.75 3.75 0 1 1 12 3.75a3.75 3.75 0 0 1 3.75 3.75zM18.75 21a7.5 7.5 0 1 0-13.5 0" />
                        </svg>
                    </Link>

                    {/* Selector de idioma */}
                    <div className="relative">
                        <button
                            onClick={() => setLangMenuOpen(!langMenuOpen)}
                            className="dark:text-black dark:bg-gray-100 flex items-center space-x-1 p-2 rounded-lg hover:bg-black focus:outline-none"
                        >
                            <img
                                src={getFlagSrc(i18n.language)}
                                alt={i18n.language}
                                className="w-6 h-4 rounded-sm object-cover"
                            />
                            <span className="ml-1">&#9662;</span>
                        </button>

                        {langMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                <ul className="py-2">
                                    <li>
                                        <button
                                            onClick={() => {
                                                i18n.changeLanguage('ca');
                                                setLangMenuOpen(false);
                                            }}
                                            className="w-full dark:bg-white text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                        >
                                            <img src="/img/ca.png" alt="Català" className="w-5 h-3 object-cover" />
                                            <span>Català</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                i18n.changeLanguage('es');
                                                setLangMenuOpen(false);
                                            }}
                                            className="w-full dark:bg-white text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                        >
                                            <img src="/img/es.svg" alt="Castellano" className="w-5 h-3 object-cover" />
                                            <span>Castellano</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                i18n.changeLanguage('en');
                                                setLangMenuOpen(false);
                                            }}
                                            className="w-full dark:bg-white text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                        >
                                            <img src="/img/en.svg" alt="English" className="w-5 h-3 object-cover" />
                                            <span>English</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Botón Cerrar sesión solo si usuario logueado */}
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            {t('menu.logout', 'Cerrar sesión')}
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
