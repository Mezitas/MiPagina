import { useState, useEffect } from 'react';
import './PanelSuperior.css'; // Asegúrate de que el nombre coincida

function PanelSuperior() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* VERSIÓN GRANDE */}
      {!isScrolled && (
        <div className="hero-section">
          <div className="hero-left">
            <img src="https://via.placeholder.com/300" alt="Mi foto" className="profile-pic" />
          </div>
          <div className="hero-right">
            <h1>Tu Nombre</h1>
            <p>Tu descripción profesional. Aquí cuentas quién eres y qué haces.</p>
            
            <div className="contact-grid">
              <div><strong>Edad:</strong> 25 años</div>
              <div><strong>Teléfono:</strong> +123 456 7890</div>
              <div><strong>Correo:</strong> tuemail@ejemplo.com</div>
              <div><strong>LinkedIn:</strong> linkedin.com/in/tuusuario</div>
            </div>
          </div>
        </div>
      )}

      {/* VERSIÓN PEQUEÑA */}
      {isScrolled && (
        <div className="navbar">
          <div className="navbar-left">
            <img src="https://via.placeholder.com/50" alt="Mi foto pequeña" className="profile-pic-small" />
            <span>Tu Nombre</span>
          </div>
          <nav className="navbar-right">
            <a href="#proyectos">Proyectos</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}

// Esta línea es la magia que permite usarlo en App.jsx
export default PanelSuperior; 