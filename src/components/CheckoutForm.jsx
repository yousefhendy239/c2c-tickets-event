function CheckoutForm() {
  return (

    <div className="checkout-form">

      <h1>Secure Checkout</h1>
      <p>Complete your transaction to receive your digital tickets instantly.</p>

      <h5>EXPRESS CHECKOUT</h5>
      <div className="express">
        
        <button className="google_btn" ><span className="google_pay">GOOGLE</span> Pay</button>
        <button className="apple_btn"><span className="apple_pay">iOS</span> Pay</button>
      </div>

      <div className="divider">
        <h4>Or pay with card</h4>
      </div>

      <label className="input-title">Cardholder Name</label>
      <input type="text" placeholder="John Doe" required />
<label className="input-title">Card Number</label>

<div className="input-with-icon">
  <input type="text" placeholder="0000 0000 0000 0000" />
  <span className="material-symbols-outlined card-icon">
    credit_card
  </span>
</div>

      <div className="card-row">
        <div className="input-group">
          <label className="input-title">Expiry Date</label>
          <input type="text" placeholder="MM/YY" maxLength={5} />
        </div>

        <div className="input-group">
          <label className="input-title">CVV</label>
          <input type="password" placeholder="123" />
        </div>
      </div>

      <div className="checkbox-div">
        
        <input type="checkbox" />
        <label>
        Save this card for future purchases
      </label>
      </div>
      

      
<div className="payment-methods">

  <label className="payment-option">
    <input type="radio" name="payment" defaultChecked />

    <span className="option-content">
      <span className="left">
  <span className="icon-box">
    <span className="material-symbols-outlined">payments</span>
  </span>
  Paypal
</span>

      <span className="radio-circle"></span>
    </span>
  </label>

  <label className="payment-option">
    <input type="radio" name="payment" />

    <span className="option-content">
     <span className="left">
  <span className="icon-box">
    <span className="material-symbols-outlined">credit_card</span>
  </span>
  Credit Card
</span>

      <span className="radio-circle"></span>
    </span>
  </label>

</div>

    </div>

  )
}

export default CheckoutForm