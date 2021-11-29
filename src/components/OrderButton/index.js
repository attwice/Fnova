import { useRouter } from "next/router"

import ROUTERS from "constants/Routers"
import MainProcessSteps from "components/Dashboard/MainProcessSteps"

const OrderButton = (props) => {
  const router = useRouter()

  const onClickHandler = () => {
    router.push(ROUTERS.CUSTOM_STICKER)
  }

  return (
    <div className={`order-button ${props.cname}`} onClick={onClickHandler}>
      {props.title}
    </div>
  )
}

export default OrderButton
