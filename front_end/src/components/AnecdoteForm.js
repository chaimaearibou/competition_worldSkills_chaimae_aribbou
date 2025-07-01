import React, { useState } from 'react';
import axios from 'axios';

function AnecdoteForm({ onAnecdoteAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/anecdotes', {
      title,
      content,
      category,
    });
    onAnecdoteAdded(); // refresh list
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#000', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
      <h2 style={{ color: '#FFD700' }}>Racontez-nous votre histoire</h2>

      <input
        type="text"
        value={title}
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        required
        style={inputStyle}
      />

      <textarea
        value={content}
        maxLength={500}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Votre anecdote (max 500 caractères)"
        required
        style={{ ...inputStyle, minHeight: '100px' }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={inputStyle}
      >
        <option value="">Choisir une catégorie</option>
        <option value="École">École</option>
        <option value="Travail">Travail</option>
        <option value="Famille">Famille</option>
      </select>

      <button type="submit" style={{
        backgroundColor: '#FFD700',
        color: '#000',
        padding: '0.75rem 1.5rem',
        borderRadius: '40px',
        border: 'none',
        marginTop: '1rem'
      }}>
        Partager
      </button>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: '1rem',
  borderRadius: '10px',
  border: '1px solid #444',
  backgroundColor: '#111',
  color: '#FFD700',
  marginBottom: '1rem',
};

export default AnecdoteForm;
