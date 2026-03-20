
import CheckoutForm from "../components/CheckoutForm"
import OrderSummary from "../components/OrderSummary"
import Footer from "../components/homepage/homepage/footer"
import Navbar from "../components/homepage/homepage/Navbar"

function Checkout() {
  return (
    <div className="page">

      <Navbar />

      <div className="checkout-container">

        <CheckoutForm />

        <OrderSummary />

      </div>

      <Footer />

    </div>
  )
}

export default Checkout