import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent';
import MyNavbar from './components/MyNavbar';
import FetchArticles from './components/FetchArticles';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* <FunctionalComponent title="TITOLO" /> */}
      <FetchArticles />
    </div>
  );
}

export default App;
