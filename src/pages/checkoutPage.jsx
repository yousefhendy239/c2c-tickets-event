import Header from "../components/header_checkout"
import CheckoutForm from "../components/CheckoutForm"
import OrderSummary from "../components/OrderSummary"
import Footer from "../components/Footer_checkout"

function Checkout() {
  return (
    <div className="page">

      <Header />

      <div className="checkout-container">

        <CheckoutForm />

        <OrderSummary />

      </div>

      <Footer />

    </div>
  )
}

export default Checkout