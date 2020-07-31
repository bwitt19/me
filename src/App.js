import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <About />
      
      <Footer />
    </div>
  );
}

export default App;
