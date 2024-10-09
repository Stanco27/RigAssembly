import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import WebRouter from './WebRouter';
import NavigationBar from './navigation_bar/NavigationBar';
import Footer from './Footer/Footer';

function App() {

  return (
    <div style={{marginTop: '60px'}}>
    <NavigationBar />
    <WebRouter />
    <Footer />
    </div>
  )
}

export default App
