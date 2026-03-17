function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">EventPass</div>

        <div className="nav-links">
          <a href="#">Events</a>
          <a href="#">My Bookings</a>
          <a href="#">Support</a>
        </div>
      </nav>

      <nav aria-label="Breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Concerts & Nightlife</a>
          </li>
          <li className="breadcrumb-item active">
            Checkout
          </li>
        </ol>
      </nav>
    </header>
  )
}

export default Header