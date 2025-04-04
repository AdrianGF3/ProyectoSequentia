import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import Header from './components/Header.tsx';
import PaginaPrincipal from './components/PaginaPrincipal.tsx';
import Footer from './components/Footer.tsx';
import Esquelas from './components/Esquelas.tsx';
import TestamentoSocial from './components/TestamentoSocial.tsx';
import Terms from './components/Terms.tsx';
import Privacy from './components/Privacy.tsx';
import Login from './Login.tsx';
import Comunidad from './components/Comunidad.tsx';

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(user ? true : false);
    });

    return () => unsubscribe();
  }, []);

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {/* Renderizamos el Header solo si no estamos en la página de Login */}
      {!isLoginPage && <Header />}

      <Routes>
        {/* Página principal siempre accesible y la primera en mostrarse */}
        <Route index element={<PaginaPrincipal />} />
        <Route path="/" element={<PaginaPrincipal />} />

        {/* Rutas sin autenticación */}
        <Route path="/esquelas" element={<Esquelas />} />
        <Route path="/TestamentoSocial" element={<TestamentoSocial />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Ruta protegida: solo accesible si el usuario está autenticado */}
        <Route
          path="/comunidad"
          element={isAuthenticated ? <Comunidad /> : <Navigate replace to="/login" />}
        />

        {/* Ruta de Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" /> : <Login key="login" />
          }
        />

        {/* Redirección a la página principal para rutas no definidas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Renderizamos el Footer solo si no estamos en la página de Login */}
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
