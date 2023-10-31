
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px',
};

const imgStyle = {
  maxWidth: '150px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
};

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const navigate = useNavigate();


  async function addBook() {
    try {
      await axios.post(`${baseUrl}/book/add`, { title, author, summary });

      navigate('/');
    } catch (error) {
      console.error('Error adding a book:', error);
    }
  }

  return (
    <div
      className="modal-content"
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        margin: '20px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <h2
        style={{
          color: '#333',
          fontSize: '24px',
          marginBottom: '20px',
        }}
      >
        Create a New Book
      </h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button onClick={addBook} style={buttonStyle}>
          Add Book
        </button>
        
      </div>
      <div
        className="book-image"
        style={{
          marginTop: '20px',
        }}
      >
       
      </div>
    </div>
  );
}

export default CreateBook;
