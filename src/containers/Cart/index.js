import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import CartComponent from "components/Cart"
import { getPrice } from "helpers/Sticker"
import { getOrderList, resetOrderList } from "helpers/StoreOrder"
import ROUTERS from "constants/Routers"

const Cart = () => {
  const router = useRouter()

  const [orderList, setOrderList] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    const orderList = getOrderList()

    if (orderList.length) {
      setOrderList(orderList)
    }

    let subTotal = 0
    orderList.forEach((order) => {
      subTotal += order.price
    })

    setSubTotal(subTotal)
  }, [])

  const handleNext = () => {
    if (subTotal) {
      router.push(ROUTERS.CHECKOOUT)
    } else {
      setEmptyList(true)
    }
  }

  const handleContinue = () => {
    router.push(ROUTERS.CUSTOM_STICKER)
  }

  const deleteOrder = (order) => {
    const newOrderList = orderList.filter(
      (orderItem, index, array) => orderItem.id !== order.id
    )

    setOrderList(newOrderList)

    let subTotal = 0
    newOrderList.forEach((order) => {
      subTotal += order.price
    })

    setSubTotal(subTotal)
    resetOrderList(newOrderList)
  }

  const changeQuantity = (order, changeAmount) => {
    const newOrderList = Array()
    for (let i = 0; i < orderList.length; i++) {
      newOrderList.push(orderList[i])
      if (orderList[i].id == order.id) {
        if (orderList[i].quantity > 10) {
          newOrderList[i].quantity =
            parseInt(newOrderList[i].quantity) + changeAmount
          newOrderList[i].price = getPrice(
            newOrderList[i].size,
            newOrderList[i].quantity
          )
        } else {
          if (changeAmount > 0) {
            newOrderList[i].quantity =
              parseInt(newOrderList[i].quantity) + changeAmount
            newOrderList[i].price = getPrice(
              newOrderList[i].size,
              newOrderList[i].quantity
            )
          }
        }
      }
    }

    setOrderList(newOrderList)

    let subTotal = 0
    newOrderList.forEach((order) => {
      subTotal += order.price
    })

    setSubTotal(subTotal)
    resetOrderList(newOrderList)
  }

  return (
    <CartComponent
      subTotal={subTotal}
      orderList={orderList}
      deleteOrder={deleteOrder}
      changeQuantity={changeQuantity}
      handleNext={handleNext}
      handleContinue={handleContinue}
      emptyList={emptyList}
    />
  )
}

export default Cart
