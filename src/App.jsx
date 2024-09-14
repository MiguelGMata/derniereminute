import React from 'react';
import AppRoutes from './components/rooter/AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/organisms/navbar/Navbar';
import './App.css'


const App = () => {
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar/>
      <AppRoutes />
    </div>
  );
}
export default App;
