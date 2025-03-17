
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import PaginaPrincipal from './components/PaginaPrincipal.tsx';
import Footer from './components/Footer.tsx';
import Esquelas from './components/Esquelas.tsx';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Esquelas" element={<Esquelas />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
