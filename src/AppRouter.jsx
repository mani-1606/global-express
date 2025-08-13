import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Balance from './components/Balance';
import Cards from './components/Cards';
import OfferDetails from './components/OfferDetails';
import CardSecurity from './components/CardSecurity';
import MembershipBenefits from './components/MembershipBenefits';
import Contact from './components/Contact';
import ApplyLoan from './components/ApplyLoan';
import ReferFriend from './components/ReferFriend';
import LoginSignup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import TransferMoney from './components/TransferMoney';
import TransactionHistory from './components/TransactionHistory';
import SpendingGraph from './components/SpendingGraph';
import About from './components/About';
import Recharge from './components/services/Recharge';
import TrainTickets from './components/services/TrainTickets';
import Flights from './components/services/Flights';
import Movies from './components/services/Movies';
import Savings from './components/services/Savings';
import ElectricityBill from './components/services/ElectricityBill';

const AppRouter = () => (
  <Router>
    <Header />
    <main style={{ minHeight: '80vh' }}>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cards" element={<Cards />} />
  <Route path="/about" element={<About />} />
  <Route path="/offers/latest" element={<OfferDetails type="Latest Offers" />} />
  <Route path="/offers/membership" element={<MembershipBenefits />} />
  <Route path="/offers/security" element={<CardSecurity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/refer" element={<ReferFriend />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/dashboard/balance" element={<Balance />} />
        <Route path="/transfer" element={<TransferMoney />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/analytics" element={<SpendingGraph />} />
  <Route path="/services/mobile-recharge" element={<Recharge />} />
  <Route path="/services/tv-recharge" element={<Recharge />} />
  <Route path="/services/train-tickets" element={<TrainTickets />} />
  <Route path="/services/flights" element={<Flights />} />
  <Route path="/services/movies" element={<Movies />} />
  <Route path="/services/savings" element={<Savings />} />
  <Route path="/services/electricity-bill" element={<ElectricityBill />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default AppRouter;
