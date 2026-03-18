import React from 'react';
import theme from '../../theme.js';
import useHover from '../../hooks/useHover.js';

const POLICY_LINKS = ['Refund Policy', 'Privacy Policy', 'Terms of Service'];

const FooterLink = ({ children }) => {
  const [hovered, hoverProps] = useHover();
  return (
    <a href="#policy" {...hoverProps} style={{
      fontSize:'0.82rem',
      color: hovered ? '#9994b8' : theme.textSubtle,
      textDecoration:'none',
      transition:theme.transition,
      fontFamily:theme.fontBody,
    }}>
      {children}
    </a>
  );
};

/* =========================================
   Component: Footer — policy links + copyright
   ========================================= */
const Footer = () => (
  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', fontFamily:theme.fontBody }}>
    <div style={{ display:'flex', gap:'24px' }}>
      {POLICY_LINKS.map((link) => <FooterLink key={link}>{link}</FooterLink>)}
    </div>
    <p style={{ fontSize:'0.82rem', color:theme.textSubtle, margin:0 }}>
      © 2026 EventPass Inc. All rights reserved.
    </p>
  </div>
);

export default Footer;
