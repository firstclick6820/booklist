

// Import React Components
import React from 'react';
import ReactDOM from 'react-dom/client';


// Import Css file
import './index.css';



// Import Main App
import App from './App';



// Import React Router Components

import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  // Let's wrapp up the whole application inside browser router component of react router.
  <BrowserRouter>
        <App />
  </BrowserRouter>
   

);

