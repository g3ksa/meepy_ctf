import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeProvider';
import './styles/style.scss';
import App from './App';


ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('wrapper')
);

document.querySelector('html').classList.add(!localStorage.theme ? 'dark' : localStorage.getItem('theme'));