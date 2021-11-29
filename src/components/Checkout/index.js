
import OrderStatusBar from "../OrderStatusBar"
import { useRouter } from 'next/router'

import { loadStripe } from "@stripe/stripe-js"

import OrderSuccess from "components/OrderSuccess"

import { useState } from "react"
import {
  SCHEDULED_DELIVERY,
  SCHEDULED_DELIVERY_SELECTED,
} from "constants/ShippingMethods"
import { STRIPE_PKEY_LIVE, STRIPE_PKEY_TEST } from "configuration"

import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import ShippingSummary from "./ShippingSumarry"

const stageTabs = [
  { className: "details", text: "Your Details" },
  { className: "payment", text: "Payment" },
  { className: "confirm", text: "Confirmation" },
]

const Checkout = ({
  shFirstName,
  shLastName,
  shStreetOne,
  shState,
  orderList,
  shippingFee,
  firstName,
  lastName,
  shippingStreet,
  shippingCity,
  subTotal,
  deliveryMode,
  deliveryDate,
  shippingMethods,
  onConfirmPayment,
  handleDeliveryModeChange,
  onCalendarClick,
  onChooseAnotherDate,
  onChangeHandler,
  validated,
  getDeliveryDayFromMethod,
  getShippingPrice,
  getIndentAction,
  biEmail,
  validateForm,
  validateStage1,
  setIntentId,
  intentId,
}) => {
  const [stage, setStage] = useState(0)
  const stripePromise = loadStripe(STRIPE_PKEY_LIVE)
  const router = useRouter()

  const onKeyUp = (e) => {
    const value = e.target.value
    e.target.value = value.replace(/^(\d{3})(\d{3})(\d+)$/, "+1 ($1) $2-$3")
  }

  const onContinue = () => {
    if (stage == 2) return
    if (validateStage1())
    setStage(stage + 1)
  }
  const onBack = () => {
    if (stage == 0) {
      router.back()
    } else {
      setStage(stage - 1)
    }
  }
  /*
  
  <div className="checkout-panel-status-box-item">
    <div className="square"></div>
    <div className="text">
      <label>Die Cut Sticker</label>
      <span className="quantity">x50</span>
    </div>
    <div className="price">$47.00</div>
  </div>*/
  const generateOrderList = () =>
    orderList.map((order, index) => (
      <div key={index} className="checkout-panel-status-box-item">
        <div className="square">{order.quantity}</div>
        <div className="text">
          <label>{order.type}</label>
          {/*<span className="quantity">x{order.quantity}</span>*/}
          <span className="quantity">
            Pending Proof Approval
          </span>
        </div>
        <div className="price">{`$${order.price}`}</div>
      </div>
    ))

  const generateShippingMethods = () =>
    shippingMethods.map((method, index) => (
      <div
        key={index}
        className="checkout-panel-delivery-dates-item flex"
        onChange={() =>
          handleDeliveryModeChange(method, getDeliveryDayFromMethod(method))
        }
      >
        <label className="custom-radio">
          <div className="flex flex-column">
            {method !== SCHEDULED_DELIVERY
              ? getDeliveryDayFromMethod(method)
              : deliveryMode === SCHEDULED_DELIVERY_SELECTED && deliveryDate
              ? deliveryDate
              : "Choose a date"}
            <span>{`${method} delivery`}</span>
            {method === SCHEDULED_DELIVERY &&
              deliveryMode === SCHEDULED_DELIVERY_SELECTED &&
              deliveryDate && (
                <span onClick={() => onChooseAnotherDate()}>
                  Choose another date
                </span>
              )}
          </div>
          <input
            type="radio"
            name="dates"
            defaultChecked={(() => {
              if (method === SCHEDULED_DELIVERY) {
                return (
                  deliveryMode === SCHEDULED_DELIVERY ||
                  deliveryMode === SCHEDULED_DELIVERY_SELECTED
                )
              } else {
                return deliveryMode === method
              }
            })()}
          />
          <span className="checkmark"></span>
        </label>
        <div className="checkout-panel-delivery-dates-item-service">
          {getShippingPrice(orderList, method)
            ? `+$${getShippingPrice(orderList, method)}`
            : "Free"}
        </div>
      </div>
    ))

  return (
    <>
      <div className="checkout">
        <div className="checkout-header">
          <div className="checkout-header-title">
            {stageTabs.map((tab, index) => {
              return (
                <div className={tab.className} key={index}>
                  <div className={"square " + (index == stage ? "active" : "")}>
                    {index + 1}
                  </div>
                  <span className={index == stage ? "active" : ""}>
                    {tab.text}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="checkout-panel">
          <div className="checkout-panel-info">
            {stage === 0 && (
              <StepOne
                onChangeHandler={onChangeHandler}
                validated={validated}
                onContinue={onContinue}
                onBack={onBack}
              />
            )}
            {stage === 1 && (
              <StepTwo
                onChangeHandler={onChangeHandler}
                validated={validated}
                generateShippingMethods={generateShippingMethods}
                deliveryMode={deliveryMode}
                onCalendarClick={onCalendarClick}
                stripePromise={stripePromise}
                onConfirmPayment={onConfirmPayment}
                subTotal={subTotal}
                getIndentAction={getIndentAction}
                billingEmail={biEmail}
                validateForm={validateForm}
                setIntentId={setIntentId}
                intentId={intentId}
                onBack={onBack}
                onContinue={onContinue}
              />
            )}
            {stage === 2 && <OrderSuccess />}
          </div>
          <ShippingSummary
            generateOrderList={generateOrderList}
            orderList={orderList}
            shippingFee={shippingFee}
            subTotal={subTotal}
            shFirstName={shFirstName}
            shLastName={shLastName}
            shStreetOne={shStreetOne}
            shState={shState}
          />
        </div>
      </div>
    </>
  )
}
export default Checkout
