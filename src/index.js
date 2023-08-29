import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css';
/* src/index.css */
import 'bootstrap/dist/css/bootstrap.min.css';


// import { Main } from './components/Main';
// import 
// import './components/Main.js'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);

// If you want t<o start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
