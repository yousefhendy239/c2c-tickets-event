import React, { useEffect } from 'react';
import theme from '../../theme.js';
import { Link } from "react-router-dom";


/* =========================================
   Inject @keyframe animations once into <head>
   (CSS-only — runs on compositor thread for 60fps)
   ========================================= */
const injectStyles = () => {
  if (document.getElementById('modal-styles')) return;
  const styleTag = document.createElement('style');
  styleTag.id = 'modal-styles';
  styleTag.textContent = `
    @keyframes overlayFadeIn { from { opacity:0 } to { opacity:1 } }
    @keyframes modalSlideUp  { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
    .modal-overlay  { animation: overlayFadeIn 200ms ease-out both; }
    .modal-panel    { will-change: transform, opacity; animation: modalSlideUp 200ms ease-out both; }
    .modal-btn-secondary { transition: transform 0.15s ease, box-shadow 0.15s ease; }
    .modal-btn-secondary:hover { transform: translateY(-2px); }
    .modal-btn-primary { transition: transform 0.15s ease, box-shadow 0.15s ease; }
    .modal-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(124,58,237,0.55); }
    .modal-btn-primary:active, .modal-btn-secondary:active { transform: translateY(0); }
  `;
  document.head.appendChild(styleTag);
};

/* =========================================
   Component: ActionButton — primary or secondary modal button
   ========================================= */
const ActionButton = ({ onClick, variant, children }) => {
  const isPrimary = variant === 'primary';
  return (
    <button
      onClick={onClick}
      className={isPrimary ? 'modal-btn-primary' : 'modal-btn-secondary'}
      style={{
        flex:         1,
        padding:      '13px',
        borderRadius: theme.radiusMd,
        fontFamily:   theme.fontDisplay,
        fontSize:     '0.9rem',
        fontWeight:   700,
        border:       isPrimary ? 'none' : `1px solid ${theme.bgCardBorder}`,
        cursor:       'pointer',
        background:   isPrimary ? 'linear-gradient(135deg, #7c3aed, #9b59f5)' : theme.bgInput,
        color:        isPrimary ? 'white' : theme.textMuted,
        boxShadow:    isPrimary ? '0 4px 18px rgba(124,58,237,0.4)' : 'none',
        margin:       0,
      }}
    >
      {children}
    </button>
  );
};

/* =========================================
   Component: CheckoutModal — animated overlay confirmation dialog
   ========================================= */
const CheckoutModal = ({ isOpen, onClose, total }) => {
  useEffect(() => { injectStyles(); }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog" aria-modal="true"
      onClick={onClose}
      className="modal-overlay"
      style={{
        position:'fixed', inset:0,
        backgroundColor:'rgba(10,8,20,0.75)',
        display:'flex', alignItems:'center', justifyContent:'center',
        zIndex:999, padding:'16px', fontFamily:theme.fontBody,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-panel"
        style={{
          backgroundColor: theme.bgCard,
          border:          `1px solid ${theme.bgCardBorder}`,
          borderRadius:    theme.radiusXl,
          padding:         '36px 32px',
          width:           '100%',
          maxWidth:        '440px',
          display:         'flex',
          flexDirection:   'column',
          gap:             '16px',
        }}
      >
        {/* Success icon */}
        <div style={{ width:'60px', height:'60px', background:'rgba(124,58,237,0.15)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(124,58,237,0.3)', marginBottom:'4px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill={theme.purplePrimary} />
            <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 style={{ fontFamily:theme.fontDisplay, fontSize:'1.3rem', fontWeight:800, color:theme.textWhite, margin:0 }}>
          Ready to Checkout
        </h2>

        <p style={{ fontSize:'0.88rem', color:theme.textMuted, lineHeight:1.6 }}>
          You're about to be redirected to a secure payment page to complete your purchase.
        </p>

        {/* Total row */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:theme.bgInput, border:`1px solid ${theme.bgCardBorder}`, borderRadius:theme.radiusMd, padding:'14px 18px', fontSize:'0.88rem', color:theme.textMuted }}>
          <span>Total due</span>
          <strong style={{ fontFamily:theme.fontDisplay, fontSize:'1.15rem', fontWeight:800, color:theme.totalColor }}>
            {total}
          </strong>
        </div>

        {/* Buttons */}
        <div style={{ display:'flex', gap:'12px', marginTop:'4px' }}>
          <ActionButton variant="secondary" onClick={onClose}>Go Back</ActionButton>
          <Link to="/checkoutpage" className="link text-decoration-none" style={{ color: '#F3F4F6' }}> <ActionButton variant="primary">Confirm &amp; Pay</ActionButton></Link>

        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
