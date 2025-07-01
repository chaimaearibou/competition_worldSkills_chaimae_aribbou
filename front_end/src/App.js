import './App.css';
import LoginPage from './auth/se_connecter.jsx';
import RegisterPage from './auth/sinscrire.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BienvenuePage from './bienvenue/bienvenue.jsx';
import AnecdotePage from './pages/AnecdotePage';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<BienvenuePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/anecdotes" element={<AnecdotePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
