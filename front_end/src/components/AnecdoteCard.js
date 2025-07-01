import React from 'react';

function AnecdoteCard({ title, content, date, category }) {
  return (
    <div style={{
      backgroundColor: '#111',
      borderRadius: '10px',
      padding: '1.5rem',
      color: '#FFD700',
      marginBottom: '1rem',
      border: '1px solid #444'
    }}>
      <h3 style={{ color: '#fff' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>{new Date(date).toLocaleDateString()}</p>
      <p>{content}</p>
      <span style={{ fontSize: '0.8rem', color: '#888' }}>Catégorie: {category}</span>
    </div>
  );
}

export default AnecdoteCard;
