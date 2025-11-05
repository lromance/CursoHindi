import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>(c) Luis Romance. Elaborado con apuntes propios y IA.</p>
      </footer>
    </div>
  );
}

export default App;
