import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import CreateBook from './CreateBook';
import Modal from './model';
import ViewBook from './ViewBook';
import UpdateBook from './UpdateBook';
import DeleteBook from './Delete';

function BookList({ books }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <button className="add-book-button" onClick={() => setIsAddModalOpen(true)}>
        + Add Book
      </button>
      <ul>
      {books.map((book) => (
  <li key={book._id}>
    <span className="book-title">{book.title}</span> by {book.author}
    <Link to={`/view/${book._id}`} onClick={() => setIsViewModalOpen(true)}>
      View
    </Link>
    <Link to={`/update/${book._id}`} onClick={() => setIsUpdateModalOpen(true)}>
      Update
    </Link>
    <Link to={`/delete/${book._id}`} onClick={() => setIsDeleteModalOpen(true)}>   
      Delete
    </Link>
  </li>
))}

      </ul>

      {isAddModalOpen && (
        <Modal onClose={() => setIsAddModalOpen(false)}>
          <CreateBook />
        </Modal>
      )}

      {isViewModalOpen && (
        <Modal onClose={() => setIsViewModalOpen(false)}>
          <ViewBook />
        </Modal>
      )}

      {isUpdateModalOpen && (
        <Modal onClose={() => setIsUpdateModalOpen(false)}>
          <UpdateBook />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <DeleteBook />
        </Modal>
      )}
    </div>
  );
}

export default BookList;
