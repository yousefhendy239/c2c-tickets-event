import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../theme.js';
import useHover from '../../hooks/useHover.js';

/* =========================================
   Component: NavLink — a single hover-aware anchor
   ========================================= */
const NavLink = ({ to, href, children }) => {
  const [hovered, hoverProps] = useHover();
  const style = {
    fontSize:       '0.9rem',
    fontWeight:     500,
    color:          hovered ? theme.textWhite : theme.textMuted,
    transition:     theme.transition,
    textDecoration: 'none',
    fontFamily:     theme.fontBody,
  };
  if (to) return <Link to={to} {...hoverProps} style={style}>{children}</Link>;
  return <a href={href || '#'} {...hoverProps} style={style}>{children}</a>;
};

/* =========================================
   Component: Navbar
   ========================================= */
const Navbar = () => {
  const [avatarHovered, avatarHoverProps] = useHover();

  return (
    <nav style={{
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'space-between',
      padding:         '0 32px',
      height:          '60px',
      backgroundColor: theme.bgDeep,
      borderBottom:    `1px solid ${theme.bgCardBorder}`,
      position:        'sticky',
      top:             0,
      zIndex:          100,
      fontFamily:      theme.fontBody,
      boxSizing:       'border-box',
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          width:           '36px',
          height:          '36px',
          backgroundColor: theme.bgCard,
          borderRadius:    theme.radiusSm,
          border:          `1px solid ${theme.bgCardBorder}`,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 9a2 2 0 0 1 0-4V3h20v2a2 2 0 0 1 0 4v2a2 2 0 0 1 0 4v2H2v-2a2 2 0 0 1 0-4V9Z"
              fill={theme.purplePrimary}
            />
          </svg>
        </span>
        <span style={{
          fontFamily:    theme.fontDisplay,
          fontSize:      '1.05rem',
          fontWeight:    700,
          color:         theme.textWhite,
          letterSpacing: '0.02em',
        }}>
          EventPass
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <NavLink href="#">Events</NavLink>
        <NavLink to="/">Checkout</NavLink>
        <button
          {...avatarHoverProps}
          aria-label="User account"
          style={{
            width:           '36px',
            height:          '36px',
            borderRadius:    '50%',
            backgroundColor: avatarHovered ? theme.purpleBright : theme.purplePrimary,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            border:          'none',
            cursor:          'pointer',
            transform:       avatarHovered ? 'scale(1.05)' : 'scale(1)',
            transition:      theme.transition,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="white" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
