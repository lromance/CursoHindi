import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand">Curso de Hindi</NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
          <NavLink to="/programacion" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Programa</NavLink>
          <NavLink to="/curso" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Curso Completo</NavLink>
          <NavLink to="/practicas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Prácticas</NavLink>
          <NavLink to="/herramientas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Herramientas</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;