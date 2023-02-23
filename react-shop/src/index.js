import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App';

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer)
root.render(
  <App/>
)
