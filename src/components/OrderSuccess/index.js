
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faTruck } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { resetOrderList, getOrderList } from "helpers/StoreOrder"
import { useState } from "react"
import ROUTERS from "constants/Routers"
import Cookies from "js-cookie"

import { getShippingFeeHelper, getShippingInfoHelper } from "helpers/Shipping"

const stageTabs = [
  { className: "details", text: "Your Details" },
  { className: "payment", text: "Payment" },
  { className: "confirm", text: "Confirmation" },
]

const generateOrderList = (orderList) =>
  orderList.map((order, index) => (
    <div key={index} className="checkout-panel-status-box-item">
      <div className="square">{order.quantity}</div>
      <div className="text">
        <label>{order.type}</label>
        <span className="quantity">x{order.quantity}</span>
      </div>
      <div className="price">{`$${order.price}`}</div>
    </div>
  ))

const OrderSuccess = () => {
  const [orderList, setOrderList] = useState(getOrderList)
  const [shippingInfo, setShippingInfo] = useState(getShippingInfoHelper())
  const [stage, setStage] = useState(2)
  const router = useRouter()
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    let subTotal = 0
    orderList.forEach((order) => {
      subTotal += order.price
    })

    setSubTotal(subTotal + getShippingFeeHelper())
    // const orderList = getOrderList()
    // window.gtag("js", new Date())
    // window.gtag("config", "AW-314966559")
    // window.gtag("event", "conversion", {
    //   send_to: "AW-314966559/hJ14CMjQz-0CEJ-EmJYB",
    //   value: 1.0,
    //   currency: "USD",
    //   transaction_id: "",
    // })
    // resetOrderList([])
    conversionAd()
  }, [orderList])

  const handleClick = () => {
    router.push(ROUTERS.CUSTOM_STICKER)
  }

  const conversionAd = async () => {
    try {
      const id = Cookies.get("intentId")
      const amount = Cookies.get("subTotal")
      Cookies.set("intentId", "")
      Cookies.set("subTotal", "")
      if (id && amount) {
        // eslint-disable-next-line no-undef
        gtag("event", "conversion", {
          send_to: "AW-314966559/hJ14CMjQz-0CEJ-EmJYB",
          value: parseFloat(amount),
          currency: "USD",
          transaction_id: id,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

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
            <div className="order-success flex flex-column">
              Congratulations! <br />
              Your order has been submitted
              <br />
              Thank you for using Sticker Cove!
              <div onClick={handleClick}>Continue shopping</div>
            </div>
          </div>

          <div className="checkout-panel-status">
            <div className="checkout-panel-status-box">
              <span>Basket Summary</span>
              {generateOrderList(orderList)}
              {/* <div className="checkout-panel-status-box-item">
                <div className="square">50</div>
                <div className="text">
                  <label>Kick Cut Sticker</label>
                  <span className="quantity">x50</span>
                </div>
                <div className="price">$52.00</div>
              </div>
              <div className="checkout-panel-status-box-item">
                <div className="square"></div>
                <div className="text">
                  <label>Die Cut Sticker</label>
                  <span className="quantity">x50</span>
                </div>
                <div className="price">$47.00</div>
              </div>*/}
              <div className="checkout-panel-status-box-item">
                <div className="square"></div>
                <div className="text">
                  <label>Shopping Fee</label>
                </div>
                <div className="price">${getShippingFeeHelper()}</div>
              </div>

              <div className="checkout-panel-status-box-total">
                <span>total</span>
                <span>${subTotal}</span>
              </div>
            </div>
            <div className="checkout-panel-status-box">
              <span>Shipping Details</span>
              <div className="checkout-panel-status-box-item">
                <div className="square">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="text">
                  <span>
                    {shippingInfo && shippingInfo.shFirstName}{" "}
                    {shippingInfo && shippingInfo.shLastName}
                  </span>
                  <span>
                    {shippingInfo && shippingInfo.streetAddress}{" "}
                    {shippingInfo && shippingInfo.shState}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default OrderSuccess
