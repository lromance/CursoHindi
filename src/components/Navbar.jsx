import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand">Curso de Hindi</NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
          <NavLink to="/programacion" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Programa</NavLink>
          <NavLink to="/gramatica" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Gramática</NavLink>
          <NavLink to="/vocabulario" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Vocabulario</NavLink>
          <NavLink to="/practicas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Prácticas</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;