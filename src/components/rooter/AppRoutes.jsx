import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import Error from '../pages/error/Error';
import StaysScreen from '../pages/stays/StaysScreen';
import OffertsScreen from '../pages/offerts/OffertsScreen';
import DestinationsScreen from '../pages/destination/DestinationsScreen';
import ClubsScreen from '../pages/clubs/ClubsScreen';
import HotelCard from '../../components/molecules/hotelCard/HotelCard';
import DestinationsDetails from '../molecules/destintioncard/DestinationsDetails';
import { Data } from '../../components/molecules/hotelCard/Hotels'

const hotels = Data;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />

      <Route path="/clubs" element={<ClubsScreen />} />
      <Route path="/bons-plans" element={<OffertsScreen />} />
      <Route path="/destinations" element={<DestinationsScreen />} />
      <Route path="/*" element={<Error />} />

      <Route path="/" element={hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)} />
      <Route path="/sejour/:hotelId" element={<StaysScreen  hotels={hotels} />} />

      <Route path="/destinations/:id" element={<DestinationsDetails />} /> {/* Ruta dinámica */}
    </Routes>
  );
};

export default AppRoutes;