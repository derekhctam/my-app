import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
 
        
        
        <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
          <Route exact path="page4" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">About</Link></li>
            <li><Link to="page2">Books</Link></li>
            <li><Link to="page3">Writings</Link></li>
            <li><Link to="page3">Contact</Link></li>

          </ul>
        </div>
      </Router>
       



      </header>
    </div>
  );
}

export default App;
