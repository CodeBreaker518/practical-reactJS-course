import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App';

// finding root
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer);

//rendering
root.render(
    <App />
)
