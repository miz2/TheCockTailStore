import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Welcome from './pages/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
            <Route path="/cocktail/:id" element={<ProtectedRoute element={<SingleCocktail />} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
