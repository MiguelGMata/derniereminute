import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import Error from '../pages/error/Error';
import StaysScreen from '../pages/stays/StaysScreen';
import OffertsScreen from '../pages/offerts/OffertsScreen';
import DestinationsScreen from '../pages/destination/DestinationsScreen';
import ClubsScreen from '../pages/clubs/ClubsScreen';
import DestinationsDetails from '../molecules/destintioncard/DestinationsDetails';
import Reservation from '../molecules/reservation/Reservation';
import ContactsScreen from '../pages/contact/ContactScreen';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/clubs" element={<ClubsScreen />} />
      <Route path="/bons-plans" element={<OffertsScreen />} />
      <Route path="/destinations" element={<DestinationsScreen />} />
      <Route path="destinations/sejour/:hotelId" element={<StaysScreen />} />
      <Route path="/destinations/:id" element={<DestinationsDetails />} />
      <Route path='/reservation' element={<Reservation/>} />
      <Route path='/contact' element={<ContactsScreen />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;