import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons"



const OrderStatusBar = ({ title, handlePrevious }) => {
  return (
    <div className="order-status-bar flex">
      <FontAwesomeIcon
        className="order-status-bar-icon"
        icon={faArrowCircleLeft}
        onClick={handlePrevious}
      />
      <span className="order-status-bar-title">{title}</span>
    </div>
  )
}

export default OrderStatusBar
