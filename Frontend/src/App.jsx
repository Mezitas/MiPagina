import './App.css';
import PanelSuperior from './PanelSuperior'; // Importas tu componente (ajusta la ruta si lo pusiste en /components)

function App() {
  return (
    <div className="app-container">
      
      {/* Aquí llamamos a tu panel superior */}
      <PanelSuperior />

      {/* Contenido de abajo para poder hacer scroll y probar */}
      <main className="content">
        <section id="proyectos" style={{ height: '100vh', padding: '50px' }}>
          <h2>Mis Proyectos</h2>
          <p>Aquí irá la barra desplazable de tus proyectos pronto.</p>
        </section>
      </main>
    </div>
  );
}

export default App;