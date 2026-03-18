import React from 'react';
import theme from '../../theme.js';
import heroBg from '../../assets/images/hero-bg.jpg';

/* =========================================
   Component: EventHero — concert photo banner with overlay + event info
   ========================================= */
const EventHero = () => {
  return (
    <div style={{
      position:       'relative',
      width:          '100%',
      minHeight:      '260px',
      display:        'flex',
      alignItems:     'flex-end',
      justifyContent: 'flex-start',
      padding:        '32px 36px',
      overflow:       'hidden',
      borderRadius:   theme.radiusLg,
      margin:         '16px 0 20px',
      boxSizing:      'border-box',
    }}>

      {/* Layer 1: background photo */}
      <div style={{
        position:           'absolute',
        inset:              0,
        backgroundImage:    `url(${heroBg})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        backgroundRepeat:   'no-repeat',
      }} />

      {/* Layer 2: dark gradient overlay */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'linear-gradient(to right, rgba(10,6,24,0.88) 0%, rgba(10,6,24,0.55) 60%, rgba(10,6,24,0.25) 100%)',
      }} />

      {/* Layer 3: text content */}
      <div style={{
        position:      'relative',
        zIndex:        1,
        display:       'flex',
        flexDirection: 'column',
        gap:           '12px',
        maxWidth:      '600px',
      }}>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily:      theme.fontDisplay,
            fontSize:        '0.7rem',
            fontWeight:      700,
            letterSpacing:   '0.1em',
            textTransform:   'uppercase',
            padding:         '4px 12px',
            borderRadius:    '999px',
            backgroundColor: theme.purplePrimary,
            color:           '#fff',
          }}>
            MUSIC FESTIVAL
          </span>
          <span style={{
            fontFamily:      theme.fontDisplay,
            fontSize:        '0.7rem',
            fontWeight:      700,
            letterSpacing:   '0.1em',
            textTransform:   'uppercase',
            padding:         '4px 12px',
            borderRadius:    '999px',
            backgroundColor: 'rgba(255,255,255,0.12)',
            color:           theme.textMuted,
            border:          `1px solid ${theme.bgCardBorder}`,
          }}>
            AUG 24, 2026
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily:    theme.fontDisplay,
          fontSize:      'clamp(1.5rem, 3.5vw, 2.2rem)',
          fontWeight:    800,
          color:         theme.textWhite,
          lineHeight:    1.2,
          letterSpacing: '-0.03em',
          margin:        0,
          wordBreak:     'break-word',
        }}>
          Summer Glow Festival 2026
        </h1>

        {/* Location */}
        <p style={{
          display:    'flex',
          alignItems: 'center',
          gap:        '6px',
          fontSize:   '0.875rem',
          color:      'rgba(255,255,255,0.65)',
          fontFamily: theme.fontBody,
          margin:     0,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
              fill="rgba(255,255,255,0.65)"
            />
            <circle cx="12" cy="9" r="2.5" fill="#0a0618" />
          </svg>
          Central Park Arena, New York
        </p>
      </div>
    </div>
  );
};

export default EventHero;
