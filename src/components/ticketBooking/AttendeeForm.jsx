import React, { useState } from 'react';
import theme from '../../theme.js';
// sectionTitleStyle imported from sibling component in same folder
import { sectionTitleStyle } from './TicketSelector.jsx';

/* =========================================
   Component: FormField — labelled input with focus glow
   NOTE: marginBottom:0 on label and input overrides the global
         CSS label/input rules from the host project's index.css
   ========================================= */
const FormField = ({ label, type = 'text', placeholder, value, onChange, fullWidth }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      gap:           '6px',
      gridColumn:    fullWidth ? '1 / -1' : undefined,
    }}>
      <label style={{
        fontSize:      '0.82rem',
        fontWeight:    500,
        color:         theme.textMuted,
        letterSpacing: '0.01em',
        fontFamily:    theme.fontBody,
        marginBottom:  '0',        
        display:       'block',    
        gap:           'unset',
        alignItems:    'unset',
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width:           '100%',
          padding:         '12px 16px',
          backgroundColor: theme.bgInput,
          border:          focused ? `1px solid ${theme.purplePrimary}` : `1px solid ${theme.bgCardBorder}`,
          borderRadius:    theme.radiusMd,
          color:           theme.textWhite,
          fontSize:        '0.9rem',
          fontFamily:      theme.fontBody,
          outline:         'none',
          boxShadow:       focused ? `0 0 0 3px ${theme.purpleGlow}` : 'none',
          transition:      theme.transition,
          boxSizing:       'border-box',
          marginBottom:    '0',    
        }}
      />
    </div>
  );
};

/* =========================================
   Component: AttendeeForm — attendee contact info card
   ========================================= */
const AttendeeForm = ({ formData, onFormChange }) => {
  const handleChange = (field) => (e) => onFormChange(field, e.target.value);

  return (
    <section style={{
      display:         'flex',
      flexDirection:   'column',
      gap:             '16px',
      backgroundColor: theme.bgCard,
      border:          `1px solid ${theme.bgCardBorder}`,
      borderRadius:    theme.radiusLg,
      padding:         '20px 22px',
    }}>
      <h2 style={sectionTitleStyle}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill={theme.purplePrimary} />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={theme.purplePrimary} />
        </svg>
        Attendee Information
      </h2>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'14px' }}>
        <FormField label="Full Name"     type="text"  placeholder="John Doe"          value={formData.name}  onChange={handleChange('name')}  fullWidth />
        <FormField label="Email Address" type="email" placeholder="john@example.com"  value={formData.email} onChange={handleChange('email')} />
        <FormField label="Phone Number"  type="tel"   placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange('phone')} />
      </div>
    </section>
  );
};

export default AttendeeForm;
