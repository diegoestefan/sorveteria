import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Header from './components/Header';
import ThemedButton from './components/Button';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [theme, setTheme] = useState('light');

  document.body.className = theme;

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <div>
            <nav className="navbar">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">Sobre</Link>
              <Link className="nav-link" to="/contact">Contato</Link>
              <ThemedButton className="theme-toggle-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Alternar Tema
              </ThemedButton>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </ThemeContext.Provider>
  );
};

export default App;
