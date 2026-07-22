import './PanelSuperior.css';

// Recibe la nota del jefe: { isScrolled }
function PanelSuperior({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* Si isScrolled es falso, dibuja esto (el panel grande) */}
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

      {/* Si isScrolled es verdadero, dibuja esto (el panel pequeño) */}
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

export default PanelSuperior;