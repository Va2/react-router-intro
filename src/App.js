import React from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
