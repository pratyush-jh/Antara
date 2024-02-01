import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar';
// import Home from './Components/Home';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Header/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;