// ─────────────────────────────────────────────────────────────
// TicketBookingPage.jsx
// ─────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import theme from '../theme.js';

import Navbar              from '../components/homepage/homepage/Navbar.jsx';
import EventHero           from '../components/ticketBooking/EventHero.jsx';
import TicketSelector      from '../components/ticketBooking/TicketSelector.jsx';
import AttendeeForm        from '../components/ticketBooking/AttendeeForm.jsx';
import TicketOrderSummary  from '../components/ticketBooking/TicketOrderSummary.jsx';
import CheckoutModal       from '../components/ticketBooking/CheckoutModal.jsx';
import Footer              from '../components/homepage/homepage/footer.jsx';

/* =========================================
   Static ticket data
   ========================================= */
const TICKET_OPTIONS = [
  { id:'general', name:'General Admission', description:'Access to all main stages and food courts.',             price:85  },
  { id:'vip',     name:'VIP Experience',    description:'Front row access, private lounge, and 2 drink tickets.', price:150 },
];

/* =========================================
   Page Component: TicketBookingPage
   Route: /tickets
   ========================================= */
const TicketBookingPage = () => {

  // ── State ──────────────────────────────────────────────────
  const [selectedTicketId, setSelectedTicketId] = useState('general');
  const [quantity,         setQuantity]          = useState(2);
  const [formData,         setFormData]          = useState({ name:'', email:'', phone:'' });
  const [isModalOpen,      setIsModalOpen]       = useState(false);

  // ── Derived values ─────────────────────────────────────────
  const selectedTicket = TICKET_OPTIONS.find((t) => t.id === selectedTicketId);
  const subtotal       = selectedTicket.price * quantity;
  const serviceFee     = parseFloat((subtotal * 0.07352).toFixed(2));
  const taxes          = parseFloat((subtotal * 0.04941).toFixed(2));
  const totalFormatted = `$${(subtotal + serviceFee + taxes).toFixed(2)}`;

  const handleFormChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', backgroundColor:theme.bgDeep }}>

      <Navbar />

      <main style={{ flex:1, width:'100%', maxWidth:'1060px', margin:'0 auto', padding:'0 28px', boxSizing:'border-box' }}>

        <EventHero />

        {/* Two-column grid — .two-col-grid collapses to 1 column on mobile via index.css */}
        <div
          className="two-col-grid"
          style={{ display:'grid', gridTemplateColumns:'1fr 290px', gap:'20px', alignItems:'start', marginBottom:'48px' }}
        >
          {/* Left column */}
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <TicketSelector
              tickets={TICKET_OPTIONS}
              selectedTicket={selectedTicketId}
              onSelectTicket={setSelectedTicketId}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
            <AttendeeForm formData={formData} onFormChange={handleFormChange} />
          </div>

          {/* Right column */}
          <div>
            <TicketOrderSummary
              eventName="Summer Glow Festival"
              ticketType={selectedTicket.name}
              quantity={quantity}
              unitPrice={selectedTicket.price}
              onCheckout={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ width:'100%', borderTop:`1px solid ${theme.bgCardBorder}` }}>
        <div style={{ maxWidth:'1060px', margin:'0 auto', padding:'20px 28px', boxSizing:'border-box' }}>
          <Footer />
        </div>
      </footer>

      {/* Checkout modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        total={totalFormatted}
      />
    </div>
  );
};

export default TicketBookingPage;
