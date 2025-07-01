import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ bien placé ici

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      console.log('Connexion réussie:', response.data);

      // 🔐 Tu peux stocker le token ici si tu veux :
      // localStorage.setItem('token', response.data.token);

      // ✅ Redirection vers la page après connexion
      navigate('/anecdotes');
    } catch (err) {
      console.error('Erreur de connexion', err);
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#FFD700',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#000',
          borderRadius: '15px',
          padding: '3rem',
        }}
      >
        <h2 style={{ color: '#FFD700', marginBottom: '3rem', textAlign: 'center' }}>
          Se connecter
        </h2>

        {error && (
          <div
            style={{
              marginBottom: '2rem',
              padding: '1rem 1.25rem',
              backgroundColor: '#b00020',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: '#fff' }}>
              Adresse e-mail
            </label>
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '1rem 2rem',
                borderRadius: '40px',
                border: '2px solid #444',
                backgroundColor: '#111',
                color: '#FFD700',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                fontSize: '1rem',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6A0DAD')}
              onBlur={(e) => (e.target.style.borderColor = '#444')}
              onMouseEnter={(e) => (e.target.style.borderColor = '#FFD700')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#444')}
            />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: '#fff' }}>
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '1rem 2rem',
                borderRadius: '40px',
                border: '2px solid #444',
                backgroundColor: '#111',
                color: '#FFD700',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                fontSize: '1rem',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6A0DAD')}
              onBlur={(e) => (e.target.style.borderColor = '#444')}
              onMouseEnter={(e) => (e.target.style.borderColor = '#FFD700')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#444')}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              fontWeight: '600',
              fontSize: '1rem',
            }}
          >
            <a href="/forgot-password" style={{ color: '#FFD700', textDecoration: 'none' }}>
              Mot de passe oublié ?
            </a>
            <a
              href="/register"
              style={{
                color: '#FFD700',
                textDecoration: 'none',
                fontSize: '0.85rem',
                alignSelf: 'center',
              }}
            >
              Créer un compte
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '40px',
              border: 'none',
              padding: '1rem',
              cursor: 'pointer',
              fontSize: '1.1rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e6c200')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#FFD700')}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
