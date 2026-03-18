import React from 'react';
import theme from '../../theme.js';
import useHover from '../../hooks/useHover.js';
import ticketIcon from '../../assets/images/ticket-icon.jpg';

/* =========================================
   Shared heading style (also imported by AttendeeForm)
   ========================================= */
export const sectionTitleStyle = {
  fontFamily: theme.fontDisplay,
  fontSize:   '1.05rem',
  fontWeight: 700,
  color:      theme.textWhite,
  display:    'flex',
  alignItems: 'center',
  gap:        '8px',
  margin:     0,
};

/* =========================================
   Component: TicketOption — one selectable ticket row
   ========================================= */
const TicketOption = ({ ticket, isSelected, onSelect }) => {
  const [hovered, hoverProps] = useHover();

  const border = isSelected
    ? `1px solid ${theme.purplePrimary}`
    : hovered
    ? `1px solid rgba(124,58,237,0.5)`
    : `1px solid ${theme.bgCardBorder}`;

  const background = isSelected
    ? 'rgba(124,58,237,0.08)'
    : hovered
    ? 'rgba(124,58,237,0.06)'
    : theme.bgCard;

  return (
    <div
      {...hoverProps}
      onClick={() => onSelect(ticket.id)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(ticket.id)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      style={{
        display:         'flex',
        alignItems:      'center',
        gap:             '14px',
        padding:         '16px 18px',
        borderRadius:    theme.radiusMd,
        border,
        backgroundColor: background,
        boxShadow:       isSelected ? `0 0 0 1px ${theme.purplePrimary}` : 'none',
        cursor:          'pointer',
        transition:      theme.transition,
        outline:         'none',
      }}
    >
      {/* Radio dot */}
      <div style={{
        width:          '20px',
        height:         '20px',
        borderRadius:   '50%',
        border:         `2px solid ${isSelected ? theme.purplePrimary : theme.bgCardBorder}`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
        transition:     theme.transition,
      }}>
        <div style={{
          width:           '10px',
          height:          '10px',
          borderRadius:    '50%',
          backgroundColor: isSelected ? theme.purplePrimary : 'transparent',
          transition:      theme.transition,
        }} />
      </div>

      {/* Name + description */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <span style={{ fontFamily: theme.fontDisplay, fontSize: '0.95rem', fontWeight: 600, color: theme.textWhite }}>
          {ticket.name}
        </span>
        <span style={{ fontSize: '0.8rem', color: theme.textMuted, fontFamily: theme.fontBody }}>
          {ticket.description}
        </span>
      </div>

      {/* Price */}
      <span style={{ fontFamily: theme.fontPrice, fontSize: '1rem', fontWeight: 700, color: theme.priceColor }}>
        ${ticket.price.toFixed(2)}
      </span>
    </div>
  );
};

/* =========================================
   Component: QuantityButton — one +/− button
   ========================================= */
const QuantityButton = ({ onClick, disabled, ariaLabel, children }) => {
  const [hovered, hoverProps] = useHover();
  return (
    <button
      {...hoverProps}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{
        width:           '40px',
        height:          '40px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        color:           disabled ? theme.textSubtle : hovered ? theme.purpleBright : theme.textWhite,
        backgroundColor: hovered && !disabled ? 'rgba(124,58,237,0.25)' : 'transparent',
        border:          'none',
        cursor:          disabled ? 'not-allowed' : 'pointer',
        transition:      theme.transition,
        padding:         0,
        margin:          0,
      }}
    >
      {children}
    </button>
  );
};

/* =========================================
   Component: QuantityPicker — label + stepper control
   ========================================= */
const QuantityPicker = ({ quantity, maxQuantity, onChange }) => (
  <div style={{
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    paddingTop:     '4px',
    flexWrap:       'wrap',
    gap:            '12px',
    fontFamily:     theme.fontBody,
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <span style={{ fontSize: '0.9rem', fontWeight: 500, color: theme.textWhite }}>Quantity</span>
      <span style={{ fontSize: '0.78rem', color: theme.textMuted }}>Max {maxQuantity} tickets per person</span>
    </div>

    <div style={{
      display:         'flex',
      alignItems:      'center',
      backgroundColor: theme.bgCard,
      border:          `1px solid ${theme.bgCardBorder}`,
      borderRadius:    theme.radiusMd,
      overflow:        'hidden',
    }}>
      <QuantityButton onClick={() => quantity > 1 && onChange(quantity - 1)} disabled={quantity <= 1} ariaLabel="Decrease quantity">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </QuantityButton>

      <span style={{
        minWidth:    '36px',
        textAlign:   'center',
        fontFamily:  theme.fontDisplay,
        fontSize:    '0.95rem',
        fontWeight:  700,
        color:       theme.textWhite,
        borderLeft:  `1px solid ${theme.bgCardBorder}`,
        borderRight: `1px solid ${theme.bgCardBorder}`,
        lineHeight:  '40px',
      }}>
        {quantity}
      </span>

      <QuantityButton onClick={() => quantity < maxQuantity && onChange(quantity + 1)} disabled={quantity >= maxQuantity} ariaLabel="Increase quantity">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </QuantityButton>
    </div>
  </div>
);

/* =========================================
   Component: TicketSelector — main card wrapping all sub-components
   ========================================= */
const TicketSelector = ({ tickets, selectedTicket, onSelectTicket, quantity, onQuantityChange }) => (
  <section style={{
    display:         'flex',
    flexDirection:   'column',
    gap:             '14px',
    backgroundColor: theme.bgCard,
    border:          `1px solid ${theme.bgCardBorder}`,
    borderRadius:    theme.radiusLg,
    padding:         '20px 22px',
  }}>
    <h2 style={sectionTitleStyle}>
      <img src={ticketIcon} alt="Ticket icon" style={{ width:'26px', height:'26px', borderRadius:'6px', objectFit:'cover', flexShrink:0 }} />
      Select Tickets
    </h2>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {tickets.map((ticket) => (
        <TicketOption key={ticket.id} ticket={ticket} isSelected={selectedTicket === ticket.id} onSelect={onSelectTicket} />
      ))}
    </div>

    <QuantityPicker quantity={quantity} maxQuantity={5} onChange={onQuantityChange} />
  </section>
);

export default TicketSelector;
