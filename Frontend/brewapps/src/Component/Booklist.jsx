// src/components/BookList.js

import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
            <Link to={`/view/${book._id}`}>View</Link>
            <Link to={`/update/${book._id}`}>Update</Link>
            <Link to={`/delete/${book._id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
