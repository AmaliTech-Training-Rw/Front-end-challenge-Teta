import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // Remove '.js' extension
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error('Root element with id "root" not found.');
}
