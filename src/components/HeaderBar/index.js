import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import FontButton from "components/FontButton"

const HeaderBar = () => {
  return (
    <div className="header-bar flex">
      <span>
        <span>
          <FontAwesomeIcon icon={faPhoneAlt} />
          <a href="tel:864-660-4023">864-660-4023</a>
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:help@stickercove.com">help@stickercove.com</a>
        </span>
      </span>
      <div className="flex">
        <FontButton
          to="https://www.instagram.com/stickercove/"
          icon={faInstagram}
        />
        <FontButton to="https://twitter.com/Sticker__Cove" icon={faTwitter} />
        <FontButton
          to="https://www.facebook.com/StickerCove"
          icon={faFacebookF}
        />
      </div>
    </div>
  )
}

export default HeaderBar
