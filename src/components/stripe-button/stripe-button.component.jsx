import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    "pk_test_51H7vZaKLc0SGBqGJQ4VDbk52VjuJsE1ZpwkOSiwV8yR7HZBbDpusQdSea6Md01471nOamneJuw4F5ChqaeO35QP500xSj3VCWy"

  const onToken = token => {
    console.log(token)
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
