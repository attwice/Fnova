import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { connect, useDispatch, useSelector } from "react-redux"
import { createStructuredSelector } from "reselect"
import CheckoutComponent from "components/Checkout"

import { orderStateSelector } from "redux/Selectors"
import {
  createOrderAction,
  stripePayAction,
  getIndentAction,
} from "redux/Reducers/Order"

import ROUTERS from "constants/Routers"

import shippingMethods, {
  STANDARD_DELIVERY,
  SCHEDULED_DELIVERY,
  SCHEDULED_DELIVERY_SELECTED,
} from "constants/ShippingMethods"
import { getDateTimeFormat } from "helpers/DateTimeHelper"
import { getOrderList } from "helpers/StoreOrder"
import {
  getDeliveryDayFromMethod,
  setShippingFeeHelper,
  getShippingFeeHelper,
  setShippingInfoHelper,
} from "helpers/Shipping"
import { getShippingPrice } from "helpers/Sticker"

import Cookies from "js-cookie"
import Swal from "sweetalert2"

import { 
  CHANGE_PHONE_NUMBER,
  CHANGE_EMAIL_ADDRESS,
  CHANGE_SHIPPING_FIRSTNAME,
  CHANGE_SHIPPING_LASTNAME,
  CHANGE_SHIPPING_COMPANY,
  CHANGE_SHIPPING_STREET_ONE,
  CHANGE_SHIPPING_CITY,
  CHANGE_SHIPPING_STATE,
  CHANGE_SHIPPPING_ZIP,
  CHANGE_BILLING_EMAIL,
  CHANGE_BILLING_STREET_ONE,
  CHANGE_BILLING_STREET_TWO,
  CHANGE_BILLING_CITY,
  CHANGE_BILLING_STATE,
  BILLING_SHIPPING_SAME
} from "constants/index"

const Checkout = ({ createOrderAction, getIndentAction }) => {
  const dispatch = useDispatch()
  const checkoutValue = useSelector(state => state.checkout)

  const [orderList, setOrderList] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState(checkoutValue.phoneNumber)
  const [emailAddress, setEmailAddress] = useState(checkoutValue.emailAddress)
  const [shFirstName, setShFirstName] = useState(checkoutValue.shippingFirstname)
  const [shLastName, setShLastName] = useState(checkoutValue.shippingLastname)
  const [shCompany, setShCompany] = useState(checkoutValue.shippingCompany)
  const [shStreetOne, setShStreetOne] = useState(checkoutValue.shippingStreetOne)
  const [shStreetTwo, setShStreetTwo] = useState(checkoutValue.shippingStreetTwo)
  const [shCity, setShCity] = useState(checkoutValue.shippingCity)
  const [shState, setShState] = useState(checkoutValue.shippingState)
  const [shZip, setShZip] = useState(checkoutValue.shippingZip)
  const [deliveryDate, setDeliveryDate] = useState(
    getDeliveryDayFromMethod(STANDARD_DELIVERY)
  )
  const [deliveryMode, setDeliveryMode] = useState(STANDARD_DELIVERY)
  const [shippingFee, setShippingFee] = useState(0)
  const [biEmail, setBiEmail] = useState(checkoutValue.emailAddress)
  const [biStreetOne, setBiStreetOne] = useState(checkoutValue.billingStreetOne)
  const [biStreetTwo, setBiStreetTwo] = useState(checkoutValue.billingStreetTwo)
  const [biCity, setBiCity] = useState(checkoutValue.billingCity)
  const [biState, setBiState] = useState(checkoutValue.billingState)
  const [validated, setValidated] = useState({
    phone: false,
    email: false,
    shFirst: false,
    shLast: false,
    shStreetOne: false,
    shCity: false,
    shState: false,
    shZip: false,
    biEmail: false,
    biStreetOne: false,
    biCity: false,
    biState: false,
  })
  const [intentId, setIntentId] = useState(false)
  const fieldsName = {
    phone: "Phone number",
    email: "Email",
    shFirst: "Shippment First Name",
    shLast: "Shippment First Name",
    shStreetOne: "Shippment Street",
    shCity: "Shippment City",
    shState: "Shippment State",
    shZip: "Shippment Zip code",
    biEmail: "Billing Email",
    biStreetOne: "Billing Street",
    biCity: "Billing City",
    biState: "Billing State",
  }
  const router = useRouter()

  useEffect(() => {
    setShippingInfoHelper({
      shFirstName,
      shLastName,
      streetAddress: `${shStreetOne} ${shStreetTwo}`,
      shState,
    })
  })
  useEffect(() => {
    const orderList = getOrderList()
    setShippingFee(getShippingPrice(orderList, deliveryMode))

    if (orderList.length) {
      setOrderList(orderList)
    }

    let subTotal = 0
    orderList.forEach((order) => {
      subTotal += order.price
    })

    setSubTotal(subTotal + shippingFee)
  }, [deliveryMode])

  const validateStage1Values = () => {
    let needFill = []

    if (!phoneNumber) needFill.push("Phone number")
    if (emailAddress.indexOf("@") === -1 || (emailAddress.indexOf(".com") === -1 && emailAddress.indexOf(".net") === -1 && emailAddress.indexOf(".org") === -1 && emailAddress.indexOf(".co") === -1 && emailAddress.indexOf(".uk") === -1 ))
      needFill.push("Shipping email")
    if (!shFirstName) needFill.push("Shipping First Name")
    if (!shLastName) needFill.push("Shipping Last Name")
    if (!checkoutValue.shippingStreetOne) needFill.push("Shipping Street")
    if (!checkoutValue.shippingCity) needFill.push("Shipping City")
    if (!checkoutValue.shippingState) needFill.push("Shipping State")
    if (!checkoutValue.shippingZip) needFill.push("Shipping ZIP")
    return needFill
  }

  const validateValues = () => {
    let needFill = []

    if (!phoneNumber) needFill.push("Phone number")
    if (emailAddress.indexOf("@") === -1 || (emailAddress.indexOf(".com") === -1 && emailAddress.indexOf(".net") === -1 && emailAddress.indexOf(".org") === -1 && emailAddress.indexOf(".co") === -1 && emailAddress.indexOf(".uk") === -1 ))
      needFill.push("Shipping email")
    if (!shFirstName) needFill.push("Shipping First Name")
    if (!shLastName) needFill.push("Shipping Last Name")
    if (!shStreetOne) needFill.push("Shipping Street")
    if (!shCity) needFill.push("Shipping City")
    if (!shState) needFill.push("Shipping State")
    if (!shZip) needFill.push("Shipping ZIP")
    if (biEmail.indexOf("@") === -1 || (biEmail.indexOf(".com") === -1 && biEmail.indexOf(".net") === -1 && biEmail.indexOf(".org") === -1 && biEmail.indexOf(".co") === -1 && biEmail.indexOf(".uk") === -1 ))
      needFill.push("Billing Email")
    if (!biStreetOne) needFill.push("Billing Street")
    if (!biCity) needFill.push("Billing City")
    if (!biState) needFill.push("Billing State")

    return needFill
  }

  const validatePass = () => {
    let needFill = []

    for (const key in validated) {
      if (validated[key] === false) {
        needFill.push(fieldsName[key])
      }
    }

    return needFill
  }

  const validateStage1 = () => {
    const fieldsValidates = validateStage1Values()
    if (fieldsValidates.length) {
      Swal.fire(
        `To continue you need to fill in the following field${
          fieldsValidates.length > 1 ? "s" : ""
        }.`,
        `${fieldsValidates.join(", ")}`,
        "info"
      )
      return false
    } else {
      return true
    }
  }

  const validateForm = () => {
    const fieldsValidates = validateValues()
    if (fieldsValidates.length) {
      Swal.fire(
        `To continue you need to fill in the following field${
          fieldsValidates.length > 1 ? "s" : ""
        }.`,
        `${fieldsValidates.join(", ")}`,
        "info"
      )
      return false
    } else {
      return true
    }
  }

  const onConfirmPayment = (id) => {

    const orderList = getOrderList()
    const requestBody = {
      orders: orderList,
      phoneNumber,
      emailAddress,
      shFirstName,
      shLastName,
      shCompany,
      shStreetOne,
      shStreetTwo,
      shCity,
      shState,
      shZip,
      biEmail,
      biStreetOne,
      biStreetTwo,
      biCity,
      biState,
    }

    createOrderAction({
      body: {
        email: emailAddress,
        phone: phoneNumber,
        firstname: shFirstName,
        lastname: shLastName,
        company: shCompany,
        streetAddress: `${shStreetOne}, ${shStreetTwo}`,
        city: shCity,
        state: shState,
        zip: shZip,
        deliveryDate,
        orders: getOrderList(),
        price: subTotal,
        label: "ONHOLD",
      },
      onSuccess: ({ data }) => {
        const gclId = Cookies.get("_gac_UA-285031413-1")
        Cookies.set("intentId", id)
        Cookies.set("subTotal", subTotal)
        if (gclId) {
          window.dataLayer.push({ event: "conversion-tracking" })
        }
        router.push(ROUTERS.SUCCESS)
      },
    })
  }

  const handleDeliveryModeChange = (mode, date) => {
    setDeliveryMode(mode)

    if (mode !== SCHEDULED_DELIVERY) {
      setDeliveryDate(date)
    }

    const orderList = getOrderList()
    setShippingFee(getShippingPrice(orderList, mode))
    setShippingFeeHelper(getShippingPrice(orderList, mode))
    setShippingInfoHelper({
      shFirstName,
      shLastName,
      streetAddress: `${shStreetOne} ${shStreetTwo}`,
      shState,
    })
  }

  const onCalendarClick = (value) => {
    const selectedDate = getDateTimeFormat(value)

    setDeliveryMode(SCHEDULED_DELIVERY_SELECTED)
    setDeliveryDate(selectedDate)
  }

  const onChooseAnotherDate = () => {
    if (SCHEDULED_DELIVERY_SELECTED) {
      setDeliveryMode(SCHEDULED_DELIVERY)
    }
  }

  const onChangeHandler = (e) => {
    const type = e.target.name

    switch (type) {
      case "phone-number":
        setPhoneNumber(e.target.value)
        dispatch({type: CHANGE_PHONE_NUMBER, payload: e.target.value})
        break
      case "email-address":
        setEmailAddress(e.target.value)
        dispatch({type: CHANGE_EMAIL_ADDRESS, payload: e.target.value})
        break
      case "shipping-firstname":
        setShFirstName(e.target.value)
        dispatch({type: CHANGE_SHIPPING_FIRSTNAME, payload: e.target.value})
        break
      case "shipping-lastname":
        setShLastName(e.target.value)
        dispatch({type: CHANGE_SHIPPING_LASTNAME, payload: e.target.value})
        break
      case "shipping-company":
        setShCompany(e.target.value)
        dispatch({type: CHANGE_SHIPPING_COMPANY, payload: e.target.value})
        break
      case "shipping-street-one":
        setShStreetOne(e.target.value)
        dispatch({type: CHANGE_SHIPPING_STREET_ONE, payload: e.target.value})
        break
      case "shipping-city":
        setShCity(e.target.value)
        dispatch({type: CHANGE_SHIPPING_CITY, payload: e.target.value})
        break
      case "shipping-state":
        setShState(e.target.value)
        dispatch({type: CHANGE_SHIPPING_STATE, payload: e.target.value})
        break
      case "shipping-zip":
        setShZip(e.target.value)
        dispatch({type: CHANGE_SHIPPPING_ZIP, payload: e.target.value})
        break
      case "billing-email":
        setBiEmail(e.target.value)
        dispatch({type: CHANGE_EMAIL_ADDRESS, payload: e.target.value})
        break
      case "billing-street-one":
        setBiStreetOne(e.target.value)
        dispatch({type: CHANGE_BILLING_STREET_ONE, payload: e.target.value})
        break
      case "billing-street-two":
        setBiStreetTwo(e.target.value)
        dispatch({type: CHANGE_BILLING_STREET_TWO, payload: e.target.value})
        break
      case "billing-city":
        setBiCity(e.target.value)
        dispatch({type: CHANGE_BILLING_CITY, payload: e.target.value})
        break
      case "billing-state":
        setBiState(e.target.value)
        dispatch({type: CHANGE_BILLING_STATE, payload: e.target.value})
        break
      case "billing-shipping-same":
        dispatch({type: BILLING_SHIPPING_SAME, payload: e.target.checked})
        break
      default:
        break
    }

    validateValues()
  }

  return (
    <CheckoutComponent
      shFirstName={shFirstName}
      shLastName={shLastName}
      shStreetOne={shStreetOne}
      shState={shState}
      orderList={orderList}
      shippingFee={shippingFee}
      subTotal={subTotal}
      firstName={shFirstName}
      lastName={shLastName}
      shippingStreet={shStreetOne}
      shippingCity={shCity}
      deliveryMode={deliveryMode}
      deliveryDate={deliveryDate}
      shippingMethods={shippingMethods}
      onConfirmPayment={onConfirmPayment}
      handleDeliveryModeChange={handleDeliveryModeChange}
      onCalendarClick={onCalendarClick}
      onChooseAnotherDate={onChooseAnotherDate}
      onChangeHandler={onChangeHandler}
      validated={validated}
      getDeliveryDayFromMethod={getDeliveryDayFromMethod}
      getShippingPrice={getShippingPrice}
      getIndentAction={getIndentAction}
      biEmail={biEmail}
      validateForm={validateForm}
      validateStage1={validateStage1}
      setIntentId={setIntentId}
      intentId={intentId}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  orderStore: orderStateSelector,
})

const mapDispatchToProps = {
  createOrderAction,
  stripePayAction,
  getIndentAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
