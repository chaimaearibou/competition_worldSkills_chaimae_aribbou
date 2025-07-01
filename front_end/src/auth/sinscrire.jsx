import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // ✅ pour redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      setSuccess('Inscription réussie ! Redirection en cours...');
      console.log(response.data);

      // ✅ Redirection après 2 secondes
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError("Erreur lors de l'inscription. Vérifiez les champs.");
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
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#121212',
          borderRadius: '15px',
          padding: '3rem',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ color: '#FFD700', marginBottom: '3rem', textAlign: 'center' }}>
          Créer un compte
        </h2>

        {error && (
          <div
            style={{
              marginBottom: '2rem',
              padding: '1rem',
              backgroundColor: '#b00020',
              color: '#fff',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            style={{
              marginBottom: '2rem',
              padding: '1rem',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleRegister}>
          {['nom', 'prenom', 'email', 'password', 'password_confirmation'].map((field) => {
            const labels = {
              nom: 'Nom',
              prenom: 'Prénom',
              email: 'Adresse e-mail',
              password: 'Mot de passe',
              password_confirmation: 'Confirmation du mot de passe',
            };
            const type = field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text';

            return (
              <div key={field} style={{ marginBottom: '2.5rem' }}>
                <label
                  htmlFor={field}
                  style={{
                    display: 'block',
                    marginBottom: '0.75rem',
                    color: '#fff',
                  }}
                >
                  {labels[field]}
                </label>
                <input
                  id={field}
                  name={field}
                  type={type}
                  value={formData[field]}
                  onChange={handleChange}
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
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#6A0DAD')}
                  onBlur={(e) => (e.target.style.borderColor = '#444')}
                  onMouseEnter={(e) => (e.target.style.borderColor = '#FFD700')}
                  onMouseLeave={(e) => (e.target.style.borderColor = '#444')}
                />
              </div>
            );
          })}

          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <a
              href="/login"
              style={{
                color: '#FFD700',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600',
              }}
            >
              Vous avez déjà un compte ? Se connecter
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
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
