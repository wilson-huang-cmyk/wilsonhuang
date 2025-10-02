import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Resilead } from './pages/Resilead';
import { SafePlay } from './pages/SafePlay';
import { RiseYouth } from './pages/RiseYouth';
import { Research } from './pages/Research';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="toggle-thumb"></span>
      </button>
      <div className="app-layout">
        <aside className="sidebar">
          <Navigation />
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resilead" element={<Resilead />} />
            <Route path="/safeplay" element={<SafePlay />} />
            <Route path="/rise-youth" element={<RiseYouth />} />
            <Route path="/research" element={<Research />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
