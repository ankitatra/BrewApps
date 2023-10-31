import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const containerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  margin: '20px',
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  marginLeft: '10px',
};

function DeleteBook() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [load, setLoad] = useState(false);

  console.log(id);

  const handleDelete = async () => {
    try {
      setLoad(true);
      await axios.delete(`${baseUrl}book/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting the book:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <button onClick={handleDelete} style={buttonStyle}>
        Delete
      </button>
      <Link to={`/`} style={linkStyle}>
        Cancel
      </Link>
      
     
    </div>
  );
}

export default DeleteBook;
