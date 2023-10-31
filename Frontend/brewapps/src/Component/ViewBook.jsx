import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    margin: '20px',
  };
  
  const headingStyle = {
    color: '#333',
    fontSize: '24px', 
    marginBottom: '10px',
  };
  
  const paragraphStyle = {
    marginBottom: '10px',
    fontSize: '16px', 
  };
  

function ViewBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`${baseUrl}/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    }
    fetchBook();
  }, [id]);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Book Details</h2>
      <p style={paragraphStyle}>Title: {book.title}</p>
      <p style={paragraphStyle}>Author: {book.author}</p>
      <p style={paragraphStyle}>Summary: {book.summary}</p>
    </div>
  );
}

export default ViewBook;
