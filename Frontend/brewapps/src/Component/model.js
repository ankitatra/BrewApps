
import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal({ children }) {
  return ReactDOM.createPortal(children, modalRoot);
}

export default Modal;
