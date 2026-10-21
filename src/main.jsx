/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-07
 * Description: Governed by ManageMyOpz React coding standards. React root bootstrap.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
