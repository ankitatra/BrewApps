import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const containerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  margin: '20px',
  textAlign: 'center',
};

const headingStyle = {
  color: '#333',
  fontSize: '24px',
  marginBottom: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px',
};

function UpdateBook({ history }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
const navigate=useNavigate()
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`${baseUrl}book/${id}`);
        const bookData = response.data;
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setSummary(bookData.summary);
      } catch (error) {
        console.error('Error fetching book for edit:', error);
      }
    }
    fetchBook();
  }, [id]);

  async function updateBook() {
    try {
      await axios.patch(`${baseUrl}book/${id}`, { title, author, summary });
      
      navigate("/")
    } catch (error) {
      console.error('Error updating a book:', error);
    }
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Update Book</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={inputStyle}
        />
        <button onClick={updateBook} style={buttonStyle}>
          Update Book
        </button>
      </div>
    </div>
  );
}

export default UpdateBook;
