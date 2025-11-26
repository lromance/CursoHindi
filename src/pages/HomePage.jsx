import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Curso de Hindi</h1>
      <p className="subtitle">Selecciona el material que deseas consultar:</p>
      <div className="card-grid">
        <Link to="/programacion" className="card-link bg-blue">
          <h2>Programa del Curso</h2>
          <p>Consulta el temario completo de los niveles A1 y A2.</p>
        </Link>
        <Link to="/curso" className="card-link bg-green">
          <h2>Curso Completo</h2>
          <p>Accede a la guía completa de gramática y vocabulario.</p>
        </Link>
        <Link to="/practicas" className="card-link bg-orange">
          <h2>Prácticas Interactivas</h2>
          <p>Pon a prueba tus conocimientos con ejercicios prácticos.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;