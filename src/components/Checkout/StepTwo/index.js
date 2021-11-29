import { Elements, ElementsConsumer } from "@stripe/react-stripe-js"
import StripeForm from "components/StripeForm"
import ScrollToTop from "hooks/ScrollToTop"
import axios from 'axios'
import Calender from "react-calendar"
import 'react-calendar/dist/Calendar.css';

import { SCHEDULED_DELIVERY } from "constants/ShippingMethods"
import { useSelector } from "react-redux";

const StepTwo = ({
  onChangeHandler,
  validated,
  generateShippingMethods,
  deliveryMode,
  onCalendarClick,
  stripePromise,
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
  const checkoutValue = useSelector(state => state.checkout)
  return (
    <>
      <ScrollToTop>
        <span>Billing Information</span>

        <label>Email Address</label>
        <input
          name="billing-email"
          className="checkout-panel-info-input"
          required
          value={checkoutValue.emailAddress}
          onChange={onChangeHandler}
        />

        <div className="checkout-panel-info-input-checkbox">
          <input 
            type="checkbox"
            name="billing-shipping-same"
            id="billing-shipping-same"
            checked={checkoutValue.billingShippingSame}
            onChange={onChangeHandler}
          />
          <label for="billing-shipping-same">My billing and shipping address are the same</label>
        </div>

        <label>Street Address</label>
        <input
          name="billing-street-one"
          className="checkout-panel-info-input"
          required
          disabled={checkoutValue.billingShippingSame}
          value={checkoutValue.billingStreetOne}
          onChange={onChangeHandler}
        />

        <label>City</label>
        <input
          type="text"
          name="billing-city"
          required
          disabled={checkoutValue.billingShippingSame}
          className="checkout-panel-info-input"
          value={checkoutValue.billingCity}
          onChange={onChangeHandler}
        />

        <label>State</label>
        <input
          type="text"
          name="billing-state"
          required
          disabled={checkoutValue.billingShippingSame}
          className="checkout-panel-info-input"
          value={checkoutValue.billingState}
          onChange={onChangeHandler}
        />

        {/*
      <label>City & State/Province</label>
      <input
        name="billing-state"
        className="checkout-panel-info-input"
        onClick={(e) => onChangeHandler(e)}
      />
      */}

        <span>Delivery Date</span>
        <label className="checkout-panel-delivery-comment">
          Enter your shipping information to see possible delivery dates
        </label>
        <div className="checkout-panel-delivery-dates">
          {generateShippingMethods()}
          {deliveryMode === SCHEDULED_DELIVERY && (
            <Calender
              className="checkout-contents-delivery-dates-calendar"
              onChange={onCalendarClick}
              calendarType={"US"}
              tileDisabled={(activeStartDate, date, view) => {
                const today = new Date()
                const day = new Date(activeStartDate.date)
                const minStart = new Date(today)
                minStart.setDate(today.getDate() + 6)

                let disable = false
                if (
                  (day.getDate() < minStart.getDate() &&
                    day.getMonth() <= minStart.getMonth() &&
                    day.getFullYear() <= minStart.getFullYear()) ||
                  (day.getMonth() < minStart.getMonth() &&
                    day.getFullYear() <= minStart.getFullYear())
                ) {
                  disable = true
                }

                return disable
              }}
            />
          )}
        </div>
        <Elements stripe={stripePromise}>
          <StripeForm
            onConfirmPayment={onConfirmPayment}
            subTotal={subTotal}
            getIndentAction={getIndentAction}
            billingEmail={billingEmail}
            validateForm={validateForm}
            setIntentId={setIntentId}
            intentId={intentId}
            onBack={onBack}
            onContinue={onContinue}
          />
        </Elements>
      </ScrollToTop>
    </>
  )
}

export default StepTwo
