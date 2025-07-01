import axios from 'axios';

export const getAnecdotes = async (page = 1) => {
  return await axios.get(`http://localhost:8000/api/anecdotes?page=${page}`).then(res => res.data);
};
