import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import FetchArticles from './components/FetchArticles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailComponent from './components/DetailComponent';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<FetchArticles />} />
          <Route path="/article/:id" element={<DetailComponent />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
