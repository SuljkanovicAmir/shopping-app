import './App.css';
import Nav from './components/Nav'
import Shop from './components/Shop'
import Home from './components/Home'


import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
