
import OrderStatusBar from "../OrderStatusBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
const Purchase = () => {
  const isNumber = (evt) => {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
    } else {
      return true;
    }
  }
  return (
    <div className="purchase">
      <div className="purchase-header">
        <div className="purchase-header-title">
          <div className="details">
            <div className="square active">1</div>
            <span className="active">Your Details</span>
          </div>
          <div className="payment">
            <div className="square">2</div>
            <span>Payment</span>
          </div>
          <div className="confirm">
            <div className="square">3</div>
            <span>Confirmation</span>
          </div>
        </div>
      </div>
      <div className="purchase-panel">
        <div className="purchase-panel-info">
          <span>Your Details</span>
          <label>First Name</label>
          <input className="purchase-panel-info-input"></input>
          <label>Last Name</label>
          <input className="purchase-panel-info-input"></input>
          <label>Street Address</label>
          <input className="purchase-panel-info-input"></input>
          <label>State/Province</label>
          <input className="purchase-panel-info-input"></input>
          <label>Zip Code</label>
          <input className="purchase-panel-info-input" onKeyPress={isNumber}></input>
          <div className="purchase-panel-info-control">
            <button className="purchase-panel-info-control-button">BACK</button>
            <button className="purchase-panel-info-control-button">
              CONTINUE
            </button>
          </div>
        </div>

        <div className="purchase-panel-status">
          <div className="purchase-panel-status-box">
            <span>Basket Summary</span>
            <div className="purchase-panel-status-box-item">
              <div className="square">50</div>
              <div className="text">
                <label>Die Cut Sticker</label>
                <span>Or a small description</span>
              </div>
              <div className="price">$47.00</div>
            </div>
            <div className="purchase-panel-status-box-item">
              <div className="square"></div>
              <div className="text">
                <label>Die Cut Sticker</label>
                <span className="quantity">x50</span>
              </div>
              <div className="price">$47.00</div>
            </div>
            <div className="purchase-panel-status-box-item">
              <div className="square"></div>
              <div className="text">
                <label>Die Cut Sticker</label>
                <span className="quantity">x50</span>
              </div>
              <div className="price">$47.00</div>
            </div>

            <div className="purchase-panel-status-box-total">
              <span>total</span>
              <span>$188.00</span>
            </div>
          </div>
          <div className="purchase-panel-status-box">
            <span>Shipping Details</span>
            <div className="purchase-panel-status-box-item">
              <div className="square">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="text">
                <span>Jeff Danr</span>
                <span>221B Baker St., London</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
