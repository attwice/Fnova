export const createOrder = (stickerType, value = null) => {
  const orderCount = localStorage.length
  const newId = (orderCount + 1).toString()

  const newOrder =
    value && value.toString().length ? value : { type: stickerType, id: newId }

  localStorage.setItem(`order_id_${newId}`, JSON.stringify(newOrder))

  return newId
}

export const getOrder = (id) => {
  const orderById = localStorage.getItem(`order_id_${id}`)

  if (orderById) {
    const order = JSON.parse(orderById)

    return order
  }

  return {}
}

export const updateOrder = (id, value) => {
  const orderById = localStorage.getItem(`order_id_${id}`)

  if (orderById) {
    const order = JSON.parse(orderById)
    const newOrder = Object.assign(order, value)

    localStorage.setItem(`order_id_${id}`, JSON.stringify(newOrder))

    return true
  }

  console.error("Order", id, "does not exist")
  return false
}

export const deleteOrder = (id) => {
  const orderById = localStorage.getItem(`order_id_${id}`)

  if (orderById) {
    localStorage.removeItem(`order_id_${id}`)
  }
}

export const getOrderList = () => {
  let orderKeys = []

  for (let key in localStorage) {
    if (key.includes("order_id")) {
      orderKeys.push(key)
    }
  }

  if (orderKeys.length > 0) {
    let orderList = []

    orderKeys.map((item) => {
      const order = JSON.parse(localStorage.getItem(item))

      if (order.price) {
        orderList.push(order)
      }
    })

    // for (let i = 1; i <= orderKeys.length; i++) {
    //   const order = JSON.parse(localStorage.getItem(i))

    //   if (order.price) {
    //     orderList.push(order)
    //   }
    // }

    resetOrderList(orderList)

    return orderList
  }

  return []
}

export const resetOrderList = (newList) => {
  const fee = localStorage.getItem("shipping_fee")
  const info = localStorage.getItem("shipping_info")
  localStorage.clear()
  if (fee) localStorage.setItem("shipping_fee", fee)
  if (info) localStorage.setItem("shipping_info", info)

  newList.forEach((order) => {
    createOrder(null, order)
  })
}
