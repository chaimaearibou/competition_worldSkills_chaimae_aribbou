import React, { useEffect, useState } from 'react';
import AnecdoteCard from '../components/AnecdoteCard';
import AnecdoteForm from '../components/AnecdoteForm';
import { getAnecdotes } from '../services/anecdoteService';

function AnecdotePage() {
  const [anecdotes, setAnecdotes] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchAnecdotes = async () => {
    const response = await getAnecdotes(page);
    setAnecdotes(response.data);
    setLastPage(response.meta.last_page);
  };

  useEffect(() => {
    fetchAnecdotes();
  }, [page]);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#000', color: '#FFD700' }}>
      <AnecdoteForm onAnecdoteAdded={fetchAnecdotes} />

      <h2 className="mb-4">Liste des anecdotes</h2>
      {anecdotes.map(anec => (
        <AnecdoteCard key={anec.id} {...anec} />
      ))}

      {/* Pagination */}
      <div style={{ marginTop: '2rem' }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
        <span style={{ margin: '0 1rem' }}>{page} / {lastPage}</span>
        <button disabled={page === lastPage} onClick={() => setPage(page + 1)}>Suivant</button>
      </div>
    </div>
  );
}

export default AnecdotePage;
