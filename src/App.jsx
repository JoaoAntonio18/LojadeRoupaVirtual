import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar /> {/* Menu de navegação visível em todas as páginas */}
      <main>
        <Routes> {/* Define as rotas disponíveis */}
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
      <Footer /> {/* Rodapé da página */}
    </div>
  );
};

export default App;
