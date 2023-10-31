// src/containers/BookContainer.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../Component/Booklist';

function BookContainer() {
  const [books, setBooks] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('/api/books');
        console.log(response) // Adjust the URL as per your API endpoints
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book Container</h2>
      {books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default BookContainer;
