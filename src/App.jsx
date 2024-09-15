import React from 'react';
import AppRoutes from './components/rooter/AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/organisms/navbar/Navbar';
import Footer from './components/organisms/footer/Footer';
import './App.css'



const App = () => {
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar/>
      <AppRoutes />
      <Footer/>
    </div>
  );
}
export default App;
