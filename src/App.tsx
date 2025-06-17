import { BrowserRouter as Router, Routes, Route, Navigate, useLocation,} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

// Componentes
import Header from './components/Header.tsx';
import PaginaPrincipal from './components/PaginaPrincipal.tsx';
import Footer from './components/Footer.tsx';
import Esquelas from './components/Esquelas.tsx';
import TestamentoSocial from './components/TestamentoSocial.tsx';
import Terms from './components/Terms.tsx';
import Privacy from './components/Privacy.tsx';
import Cookies from './components/Cookies.tsx';
import Login from './components/Login.tsx';
import Comunidad from './components/Comunidad.tsx';
import Proximamente from './components/Proximamente.tsx';
import Recovery from './components/Recovery.tsx'; 
import Register from './components/Registro.tsx';
import PersonalInfo from './components/PersonalInfo.tsx';

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Ocultar Header/Footer en Login y Recuperar contraseña
  const isLoginPage =
    location.pathname === '/login' || location.pathname === '/recuperar' || location.pathname === '/registro' || location.pathname === '/personal-info';

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        {/* Página principal */}
        <Route index element={<PaginaPrincipal />} />
        <Route path="/" element={<PaginaPrincipal />} />

        {/* Rutas públicas */}
        <Route path="/esquelas" element={<Esquelas />} />
        <Route path="/TestamentoSocial" element={<TestamentoSocial />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/proximamente" element={<Proximamente />} />

        {/* Ruta de comunidad protegida */}
        <Route path="/comunidad" element={isAuthenticated ? <Comunidad /> : <Navigate replace to="/login" />} />

        {/* Registro */}
        <Route path="/registro" element={isAuthenticated ? <Navigate to="/personal-info" /> : <Register />} />

        {/* Información personal después del registro */}
        <Route path="/personal-info" element={isAuthenticated ? <PersonalInfo /> : <Navigate replace to="/login" />} />

        {/* Página de login */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login key="login" />} />


        {/* Página de recuperación de contraseña */}
        <Route path="/recuperar" element={<Recovery />} />

        {/* Redirección para rutas no definidas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

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
