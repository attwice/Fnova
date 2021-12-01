import Link from 'next/link'
import OrderButton from "components/OrderButton"

import { TESTIMORIAL } from "constants/DummyTexts"

const LOGO = "/resources/images/logo/logo.webp"
const FOOTER = "/resources/images/main-footer.webp"

const Footer = () => (
  <>
    <div className="main-footer-fill"></div>
    <div className="main-footer-getapp flex">
      <img src={FOOTER} max-width="1920" max-height="150" alt="get order" />
      <div className="main-footer-getapp-content flex">
        <span>GET STARTED TODAY</span>
        <OrderButton title="ORDER NOW" />
      </div>
    </div>
    <div className="main-footer flex">
      <div className="main-footer-info">
        <img src={LOGO} max-width="270" max-height="90" alt="logo" />
        <br />
        <p>{TESTIMORIAL}</p>
      </div>
      <div className="main-footer-service flex flex-column">
        <span>HELPFUL LINKS</span>
        <Link href={"/terms-of-service"}>TERMS OF SERVICE</Link>
        <Link href={"/privacy-policy"}>PRIVACY POLICY</Link>
        <Link href={"/refund-policy"}>REFUND POLICY</Link>
        <Link href={"/help"}>CONTACT US</Link>
        <Link href={"/faq"}>FAQ</Link>
      </div>
      <div className="main-footer-information flex flex-column">
        <span>INFORMATION</span>
        <div>Looking for additional help? Contact StickerCove today.</div>
        <div className="main-footer-information-contacts">
          <div>
            Tel: <a href="tel:864-660-4023">+1 864-660-4023</a>
          </div>
          <div>
            Email:{" "}
            <a href="mailto:help@stickercove.com">help@stickercove.com</a>
          </div>
          <div className="flex main-footer-location">
            <div>Location:</div>
            <span>655H Fairview Rd. Ste 109 Simpsonville, SC</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
