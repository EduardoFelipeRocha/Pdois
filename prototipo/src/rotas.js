import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Login';
import Cadastro from './Cadastro'; 
import Dashboard from './Dashboard'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/App" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
