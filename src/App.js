import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div id="contents">
        <About />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
