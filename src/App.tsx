
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import PaginaPrincipal from './components/PaginaPrincipal.tsx';
import Footer from './components/Footer.tsx';
import Esquelas from './components/Esquelas.tsx';
import TestamentoSocial from './components/TestamentoSocial.tsx';
import Terms from './components/Terms.tsx';
import Privacy from './components/Privacy.tsx';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Esquelas" element={<Esquelas />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/TestamentoSocial" element={<TestamentoSocial />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
