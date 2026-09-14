import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/poppins/latin-300.css';
import '@fontsource/poppins/latin-400.css';
import '@fontsource/poppins/latin-500.css';
import '@fontsource/poppins/latin-600.css';
import '@fontsource/poppins/latin-700.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/ui.css';
import './styles/site-layout.css';
import './styles/study-layout.css';
import './styles/pages-marketing.css';
import './styles/pages-policy.css';
import './styles/pages-study.css';
import './styles/pages-account.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
