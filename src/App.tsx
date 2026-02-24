import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      <header>
        <Link to="/" className="logo">LUMINA.</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Our Story</Link></li>
          <li><a href="#" className="cta-btn">Order Now</a></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
