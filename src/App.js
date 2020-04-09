import './App.css'
import React from 'react';
import Header from './pages/Index'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <div>
        <Header />
        <Services />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
