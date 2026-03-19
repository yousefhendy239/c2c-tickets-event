import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkoutPage';
import TicketBookingPage from './pages/TicketBookingPage';
import Listing from './pages/Listing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkoutpage" element={<Checkout />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/tickets" element={<TicketBookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





