// ─────────────────────────────────────────────────────────────
// App.jsx 
// ─────────────────────────────────────────────────────────────

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout          from './pages/checkoutPage';
import TicketBookingPage from './pages/TicketBookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Checkout />} />
        <Route path="/tickets" element={<TicketBookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
