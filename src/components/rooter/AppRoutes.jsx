import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import Error from '../pages/error/Error';
import OffertsScreen from '../pages/offerts/OffertsScreen';
import DestinationsScreen from '../pages/destination/DestinationsScreen';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/bons-plans" element={<OffertsScreen />} />
      <Route path="/destinations" element={<DestinationsScreen />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;