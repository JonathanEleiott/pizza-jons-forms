// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.querySelector(`#root`);
const root = createRoot(container);
root.render(<App />);
