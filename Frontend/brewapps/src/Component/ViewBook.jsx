// src/components/ViewBook.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewBook({ match }) {
  const bookId = match.params.id;
  const [book, setBook] = useState({});
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`${baseUrl}/api/books/${bookId}`); // Adjust the URL as per your API endpoints
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    }
    fetchBook();
  }, [bookId]);

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Summary: {book.summary}</p>
    </div>
  );
}

export default ViewBook;
