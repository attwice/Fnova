import {
  FAST_DELIVERY,
  FASTER_DELIVERY,
  FAST_SHIPPING_FEE_SMALL,
  FAST_SHIPPING_FEE_BIG,
  FASTER_SHIPPING_FEE_SMALL,
  FASTER_SHIPPING_FEE_BIG,
} from "constants/ShippingMethods"

export const getPrice = (size, quantity) => {
  let finalPrice

  const square = size[0] * size[1] * quantity
  const price = 0.018 * square + 49

  finalPrice =
    price < 50
      ? parseInt(price / 1.5)
      : price < 55
      ? parseInt(price - 5)
      : price < 500
      ? parseInt(price)
      : price < 1000
      ? parseInt((price * 19) / 20)
      : parseInt((price * 9) / 10)
  return Math.round(finalPrice - finalPrice * 0.25)
}

export const getDiscount = (size, quantity) => {
  /*
  const standardStickerPrice = 0.7
  const price = getPrice(size, quantity)
  const pricePerSticker = price / quantity
  return Math.abs(
    Math.round(
      ((standardStickerPrice - pricePerSticker) / standardStickerPrice) * 100
    )
  )*/
  let discount = Math.round(Math.sqrt(quantity) * 3 + parseInt(size[0]) - 5)
  if (discount >= 100) {
    discount = 99
  }
  return discount
}

export const getShippingPrice = (orderList, method) => {
  let shippingFee

  if (method === FASTER_DELIVERY || method === FAST_DELIVERY) {
    let biggestSize = 0
    orderList.map((order) => {
      const square = order.size[0] * order.size[1]
      if (square > biggestSize) {
        biggestSize = square
      }

      return true
    })

    if (method === FASTER_DELIVERY) {
      shippingFee =
        biggestSize >= 25 ? FASTER_SHIPPING_FEE_BIG : FASTER_SHIPPING_FEE_SMALL
    } else {
      shippingFee =
        biggestSize >= 25 ? FAST_SHIPPING_FEE_BIG : FAST_SHIPPING_FEE_SMALL
    }
  } else {
    shippingFee = 0
  }

  return shippingFee
}
