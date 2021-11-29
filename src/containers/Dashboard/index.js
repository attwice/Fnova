import { useRouter } from "next/router"

import HomePage from "components/Dashboard"

import ROUTERS from "constants/Routers"
import StickerCategory from "components/StickerCategory"
import { createOrder } from "helpers/StoreOrder"

const Dashboard = () => {
  const router = useRouter()

  const handleOrder = (title) => {
    const orderId = createOrder(title)
    const route = title.toLowerCase().replaceAll(" ", "-")
    router.push(`${ROUTERS.CHOOSE_SIZE_QUANTITY}/${route}/${orderId}`)

    // router.push(ROUTERS.CUSTOM_STICKER)
  }

  const handleNext = () => {
    router.push(ROUTERS.CUSTOM_STICKER)
  }

  return <HomePage handleOrder={handleOrder} handleNext={handleNext} />
}

export default Dashboard
