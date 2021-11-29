import React, { useState, useEffect } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudUploadAlt, faSpinner } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import { API_ROOT } from "configuration/index"

const cardStyle = {
  style: {
    base: {
      color: "#424770",
      letterSpacing: "0.025em",
      fontFamily: "Source Code Pro, monospace",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
}

const StripeForm = ({
  onConfirmPayment,
  subTotal,
  getIndentAction,
  billingEmail,
  validateForm,
  setIntentId,
  intentId,
  onBack,
  onContinue,
}) => {
  const abandonUser = useSelector(state => state.abandon)

  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const delayDebounceFn = setTimeout(() => {
      subTotal &&
        billingEmail &&
        billingEmail.indexOf("@") !== -1 &&
        billingEmail.indexOf(".com") !== -1 &&
        getIndentAction({
          body: {
            price: subTotal,
            email: billingEmail,
            id: intentId,
          },
          onSuccess: ({ data }) => {
            setClientSecret(data.clientSecret)
            setIntentId(data.id)
          },
        })
    }, 3000)
    return () => clearTimeout(delayDebounceFn)
  }, [subTotal, billingEmail])

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setProcessing(true)
    if (validateForm()) {
      try {
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        if (payload.error) {
          setError(`Payment failed ${payload.error.message}`)
          setProcessing(false)
        } else {
          if (onConfirmPayment(payload.paymentIntent.id)) {
            setError(null)
            setProcessing(false)
            setSucceeded(true)

            axios.delete(`${API_ROOT}/delete`, abandonUser.abandonUser.date)
            .then((response) => {
            })
            .catch((error) => {
              console.log(error);
            });
          }
        }
      } catch (err) {
        console.log(err.message)
        setError(`Payment failed`)
        setProcessing(false)
      }
    } else {
      setError(`Payment failed`)
      setProcessing(false)
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <label>
        Card Details: <i>Required</i>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
      </label>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      <div className="checkout-panel-info-control">
        <button className="checkout-panel-info-control-button" onClick={onBack}>
          BACK
        </button>

        {/*<Link href="/success" className="checkout-panel-info-control-button">
          CONTINUE
      </Link>*/}
        <button
          className="payment-button"
          disabled={processing || disabled || succeeded}
          type="submit"
        >
          <span id="button-text">
            {processing ? (
              <FontAwesomeIcon icon={faSpinner} className="rotating" />
            ) : (
              "PAY NOW"
            )}
          </span>
        </button>
      </div>
    </form>
  )
}

export default StripeForm
