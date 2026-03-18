
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">EventPass</div>

        <div className="nav-links">
         
          <Link to="/tickets" style={{ color:'#ccc', textDecoration:'none', cursor:'pointer' }}>
            Buy Tickets
          </Link>
          <a href="#">My Bookings</a>
          <a href="#">Support</a>
        </div>
      </nav>

      <nav aria-label="Breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Concerts &amp; Nightlife</a></li>
          <li className="breadcrumb-item active">Checkout</li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
