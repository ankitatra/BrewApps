// src/components/UpdateBook.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateBook({ match, history }) {
  const bookId = match.params.id;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`${baseUrl}/api/books/${bookId}`); // Adjust the URL as per your API endpoints
        const bookData = response.data;
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setSummary(bookData.summary);
      } catch (error) {
        console.error('Error fetching book for edit:', error);
      }
    }
    fetchBook();
  }, [bookId]);

  async function updateBook() {
    try {
      await axios.put(`/api/books/${bookId}`, { title, author, summary }); // Adjust the URL as per your API endpoints
      history.push('/');
    } catch (error) {
      console.error('Error updating a book:', error);
    }
  }

  return (
    <div>
      <h2>Update Book</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <button onClick={updateBook}>Update Book</button>
      </div>
    </div>
  );
}

export default UpdateBook;
