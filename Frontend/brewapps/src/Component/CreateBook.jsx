// src/components/CreateBook.js

import React, { useState } from 'react';
import axios from 'axios';

function CreateBook({ history }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  async function addBook() {
    try {
      await axios.post('${baseUrl}/api/books', { title, author, summary }); // Adjust the URL as per your API endpoints
      history.push('/');
    } catch (error) {
      console.error('Error adding a book:', error);
    }
  }

  return (
    <div>
      <h2>Create a New Book</h2>
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
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default CreateBook;
