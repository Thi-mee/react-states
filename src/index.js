import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slate from './slate';
import Suwe from './suwe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Slate /> {/* This is the React functional Component */}
      <Suwe /> {/* This is the React Class Component */}
    </div>
  </React.StrictMode>
);

