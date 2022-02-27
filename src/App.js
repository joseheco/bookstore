import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import BookCreate from './components/BookIndex';
import Categories from './components/Categories';


const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<BookCreate />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
