
import FontButton from "components/FontButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Help = ({ posted, succeed, onChangeHandler, onHandleSubmit }) => (
  <div className="help flex flex-column">
    <span>Contact Us</span>
    <label>Any questions? Just write us a message!</label>
    <div className="flex">
      <div className="help-info">
        <label className="help-info-title">Contact Information</label>
        <span className="help-info-text">
          Our team will get back to you within 24 hours.
        </span>
        <div className="help-info-contact">
          <div className="help-info-contact-item">
            <FontAwesomeIcon color={"#E13E59"} icon={faPhoneAlt} />
            <span>
              <a href="tel:864-660-4023">864-660-4023</a>
            </span>
          </div>
          <div className="help-info-contact-item">
            <FontAwesomeIcon color={"#E13E59"} icon={faEnvelope} />
            <span>
              <a href="mailto:help@stickercove.com">help@stickercove.com</a>
            </span>
          </div>
        </div>
        <div className="help-info-social">
          <button className="help-info-social-button">
            <FontButton
              to="https://twitter.com/Sticker__Cove"
              icon={faTwitter}
            />
          </button>
          <button className="help-info-social-button">
            <FontButton
              to="https://www.facebook.com/StickerCove"
              icon={faFacebook}
            />
          </button>
          <button className="help-info-social-button">
            <FontButton
              to="https://www.instagram.com/stickercove/"
              icon={faInstagram}
            />
          </button>
        </div>
      </div>
      <div className="help-input flex flex-column">
        <div className="help-input-alert">
          {posted &&
            (succeed ? (
              <div className="help-input-alert-succeed flex">
                Successfully delivered. We will reach you soon
              </div>
            ) : (
              <div className="help-input-alert-failed flex">
                Oops, something really bad happend.
              </div>
            ))}
        </div>
        <div className="help-input-wrap flex flex-column">
          <div className="flex">
            <div>
              <label>First Name</label>
              <input
                type="text"
                className="help-input-firstname help-input-inputs"
                name="firstname"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                className="help-input-lastname help-input-inputs"
                name="lastname"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label>Email</label>
              <input
                type="text"
                className="help-input-email help-input-inputs"
                name="email"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                className="help-input-phone help-input-inputs"
                name="phone"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="flex flex-column">
            <label>Message</label>
            <textarea
              className="help-input-comments help-input-inputs"
              name="comments"
              id="help-input-comment"
              rows="4"
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <button onClick={onHandleSubmit}>Send</button>
        </div>
      </div>
    </div>
  </div>
)

export default Help
