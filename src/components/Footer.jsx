import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Minha Loja</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/carrinho">Carrinho</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;