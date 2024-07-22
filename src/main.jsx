import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/HomePage';
import Block from './components/Block';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';

import Block1 from './components/Block1';
import Block2 from './components/Block2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path="/ca-legislative-guru" element={<HomePage />} />
          <Route path="/block1" element={<Block1 />} />
          <Route path="/block2" element={<Block2 />} />
          <Route path="/block3" element={<Block />} />
          <Route path="/block4" element={<Block />} />
          <Route path="/block5" element={<Block />} />
          <Route path="/block6" element={<Block />} />
        </Routes>
        <BottomBar/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
