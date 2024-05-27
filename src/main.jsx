import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Category from './Category.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/category" element={<Category/>}/> 
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
