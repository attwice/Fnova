import { useRouter } from "next/router"
import OrderBanner from "components/Order/OrderBanner"
import OrderOptions from "components/Order/OrderOptions"
import OrderAd from "components/Order/OrderAd"
import OrderVideo from "components/Order/OrderVideo"
import Advertise from "components/Advertise"

import ROUTERS from "constants/Routers"

import { createOrder } from "helpers/StoreOrder"

const Order = () => {
  const router = useRouter()

  const handleNext = (title) => {
    if (title) {
      const orderId = createOrder(title)
      const route = title.toLowerCase().replaceAll(" ", "-")
      router.push(`${ROUTERS.CHOOSE_SIZE_QUANTITY}/${route}/${orderId}`)
    }
  }

  return (
    <div className="custom-sticker">
      <OrderBanner />
      <OrderOptions handleNext={handleNext} />
      <OrderAd />
      <OrderVideo />
      <Advertise key={0} handleNext={handleNext} />
    </div>
  )
}

export default Order
