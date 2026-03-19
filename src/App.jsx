
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkoutPage';
import TicketBookingPage from './pages/TicketBookingPage';
import Listing from './pages/Listing';
import Home from './pages/Home';
import Homepage from './page/homepage';	

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkoutpage" element={<Checkout />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/tickets" element={<TicketBookingPage />} />
        <Route path="/home" element={<Home />} />
		<Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

