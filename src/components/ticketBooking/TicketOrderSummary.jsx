

import React, { useState, useEffect } from 'react';
import theme from '../../theme.js';
import useHover from '../../hooks/useHover.js';

/* =========================================
   Hook: useCountdown — counts down from initialSeconds to 0
   ========================================= */
const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  return `${mm}:${ss}`;
};

const Divider = () => <div style={{ height: '1px', backgroundColor: theme.bgCardBorder }} />;

const SummaryRow = ({ label, value }) => (
  <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.88rem', color:theme.textMuted, fontFamily:theme.fontBody }}>
    <span>{label}</span>
    <span style={{ fontFamily: theme.fontPrice }}>{value}</span>
  </div>
);

const TrustItem = ({ icon, text }) => (
  <div style={{ display:'flex', alignItems:'center', gap:'10px', fontSize:'0.84rem', color:theme.textMuted, fontFamily:theme.fontBody }}>
    {icon}
    <span>{text}</span>
  </div>
);

/* =========================================
   Component: TicketOrderSummary — sticky sidebar with price breakdown + CTA
   ========================================= */
const TicketOrderSummary = ({ eventName, ticketType, quantity, unitPrice, onCheckout }) => {
  const [btnHovered, btnHoverProps] = useHover();

  const subtotal   = unitPrice * quantity;
  const serviceFee = parseFloat((subtotal * 0.07352).toFixed(2));
  const taxes      = parseFloat((subtotal * 0.04941).toFixed(2));
  const total      = subtotal + serviceFee + taxes;
  const countdown  = useCountdown(10 * 60);

  return (
    <aside style={{
      backgroundColor: theme.bgCard,
      border:          `1px solid ${theme.bgCardBorder}`,
      borderRadius:    theme.radiusLg,
      padding:         '20px',
      display:         'flex',
      flexDirection:   'column',
      gap:             '14px',
      position:        'sticky',
      top:             '80px',
      fontFamily:      theme.fontBody,
    }}>
      <h2 style={{ fontFamily:theme.fontDisplay, fontSize:'1.05rem', fontWeight:700, color:theme.textWhite, margin:0 }}>
        Order Summary
      </h2>

      <div style={{ display:'flex', justifyContent:'space-between', gap:'12px' }}>
        <div>
          <p style={{ fontFamily:theme.fontDisplay, fontSize:'0.92rem', fontWeight:700, color:theme.textWhite, margin:0 }}>{eventName}</p>
          <p style={{ fontSize:'0.8rem', color:theme.textMuted, marginTop:'2px' }}>{ticketType}</p>
        </div>
        <span style={{ fontSize:'0.9rem', color:theme.textMuted, whiteSpace:'nowrap' }}>x{quantity}</span>
      </div>

      <Divider />

      <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
        <SummaryRow label="Subtotal"    value={`$${subtotal.toFixed(2)}`} />
        <SummaryRow label="Service Fee" value={`$${serviceFee.toFixed(2)}`} />
        <SummaryRow label="Taxes"       value={`$${taxes.toFixed(2)}`} />
      </div>

      <Divider />

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:theme.fontDisplay, fontSize:'1rem', fontWeight:700, color:theme.textWhite }}>Total</span>
        <span style={{ fontFamily:theme.fontPrice, fontSize:'1.4rem', fontWeight:800, color:theme.totalColor }}>${total.toFixed(2)}</span>
      </div>

      <button
        {...btnHoverProps}
        onClick={onCheckout}
        style={{
          display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
          width:'100%', padding:'15px 24px', borderRadius:theme.radiusLg,
          background:'linear-gradient(135deg, #7c3aed, #9b59f5)',
          color:'white', fontFamily:theme.fontDisplay, fontSize:'0.95rem', fontWeight:700,
          border:'none', cursor:'pointer',
          transform:  btnHovered ? 'translateY(-1px)' : 'translateY(0)',
          filter:     btnHovered ? 'brightness(1.1)' : 'brightness(1)',
          boxShadow:  btnHovered ? '0 6px 32px rgba(124,58,237,0.6)' : '0 4px 24px rgba(124,58,237,0.45)',
          transition: theme.transition,
          margin:     0,
        }}
      >
        Proceed to Payment
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <p style={{ textAlign:'center', fontSize:'0.75rem', color:theme.textSubtle }}>Secure Checkout powered by EventPass</p>

      <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
        <TrustItem
          text="100% Secure Payment"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6L12 2Z" fill={theme.purplePrimary} />
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
        />
        <TrustItem
          text={`Tickets held for ${countdown}`}
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke={theme.purplePrimary} strokeWidth="2" />
            <path d="M12 7v5l3 3" stroke={theme.purplePrimary} strokeWidth="2" strokeLinecap="round" />
          </svg>}
        />
      </div>
    </aside>
  );
};

export default TicketOrderSummary;
