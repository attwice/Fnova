import OrderButton from "components/OrderButton"
const MAINBANNERSTICKER = "/resources/images/main-banner-stickers.webp"

const MainBanner = () => (
  <div className="main-banner flex">
    <div className="main-banner-texts flex flex-column">
      <div className="main-banner-title flex">
        <div className="">
          Create your own
          <br /> <span className="main-banner-gold">Custom Stickers</span>
          <br />
          today!
        </div>
        {/*<img src={MAINBANNERTEXTBG} alt="banner text bg" />*/}
      </div>
      <div className="main-banner-comments">
        Easy ordering process, 4 day turnaround, and free online proofs. Proudly made in the USA.
      </div>
      <div className="main-banner-order flex">
        <OrderButton cname="main-banner-order-now" title="ORDER NOW" />
        {/*<OrderButton title="GET SAMPLES" />*/}
      </div>
    </div>
    <img
      className="main-banner-sticker-img"
      src={MAINBANNERSTICKER}
      alt="main banner"
    />
  </div>
)

export default MainBanner
