import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import myNav from './myNav';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

let num = 0;

setInterval(() => {
  root.render(
    <App num={num}/>,
  );
  num++;
},1000
)