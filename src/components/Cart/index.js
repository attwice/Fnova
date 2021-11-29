import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCashRegister,
  faWindowClose,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons"


const Cart = ({
  subTotal,
  orderList,
  deleteOrder,
  changeQuantity,
  handleNext,
  handleContinue,
  emptyList,
}) => {
  const generateCart = () => {
    return orderList.map((order, index) => (
      <div key={index} className="cart-order-list-item flex">
        <div className="cart-order-list-item-type flex">
          <div className="square">{order.quantity}</div>
          {order.type} <br />
          {`${order.size[0]}" x ${order.size[1]}"`}
        </div>
        <div className="cart-order-list-item-quantity">
          <div
            className="cart-order-list-item-quantity-minus"
            onClick={() => {
              changeQuantity(order, -10)
            }}
          >
            -
          </div>
          {order.quantity}
          <div
            className="cart-order-list-item-quantity-plus"
            onClick={() => {
              changeQuantity(order, 10)
            }}
          >
            +
          </div>
        </div>
        <div
          className="cart-order-list-item-remove"
          onClick={() => deleteOrder(order)}
        >
          remove
        </div>
      </div>
    ))
  }
  const generateOrderList = () =>
    orderList.map((order, index) => (
      <div key={index} className="cart-checkout-box-item">
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
  return (
    <div className="cart">
      <span>Cart</span>
      <div className="cart-wrap flex">
        <div className="cart-order-list flex flex-column">
          <div className="cart-order-list-item flex">
            <div className="cart-order-list-item-type flex flex-column">
              Product
            </div>
            <div className="cart-order-list-item-quantity">Quantity</div>
            <div className="cart-order-list-item-remove"></div>
          </div>
          {generateCart()}
          <p className="cart-proof-warning">
            Your production proof will be emailed shortly after checkout.
          </p>
          <div className="cart-order-list-control">
            <div className="button-checkout" onClick={handleNext}>
              CHECKOUT
            </div>
            <div className="button-back" onClick={handleContinue}>
              GO BACK
            </div>
          </div>
          {emptyList && subTotal === 0 ? (
            <div className="cart-order-list-empty flex">
              You have empty list
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="cart-checkout">
          <div className="cart-checkout-box">
            <span>Basket Summary</span>

            {generateOrderList(orderList)}

            <div className="cart-checkout-box-total">
              <span>total</span>
              <span>{`$${subTotal}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
