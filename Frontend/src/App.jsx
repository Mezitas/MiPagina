import { useState, useEffect } from 'react';
import './App.css';
import PanelSuperior from './PanelSuperior'; 

function App() {
  // 1. Creamos un "estado" (una variable especial de React)
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. Creamos un "efecto" (una acción que se ejecuta sola)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 245) {
        setIsScrolled(true); // Si bajas más de 5 píxeles, dices "Sí, hizo scroll"
      } else {
        setIsScrolled(false); // Si subes arriba del todo, dices "No, no hay scroll"
      }
    };

    // 3. Le decimos al navegador que esté escuchando cuando usemos la rueda del ratón
    window.addEventListener('scroll', handleScroll);
    
    // 4. Limpieza (buena práctica, no te preocupes mucho por esta línea)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Estos corchetes vacíos significan: "Haz esto solo una vez cuando abra la página"

  return (
    <div className="app-container">
      
      {/* 5. Le pasamos la información a PanelSuperior */}
      <PanelSuperior isScrolled={isScrolled} />

      <main className={`content ${isScrolled ? 'content-scrolled' : ''}`}>
        <section id="proyectos" style={{ height: '100vh', padding: '30px' }}>
          <h2>Mis Proyectos</h2>
          <p>Aquí irá la barra desplazable de tus proyectos pronto.</p>
        </section>
      </main>
    </div>
  );
}

export default App;