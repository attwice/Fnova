

const PLAYICON = "/resources/images/play-icon.webp"
const VIDEOTHUMB = "/resources/images/video-thumb.webp"

const OrderVideo = () => (
  <div className="custom-sticker-video-panel flex">
    <div className="custom-sticker-video-box flex">
      <img width="80%" src={VIDEOTHUMB} alt="video-thumb" />
      {false && (
        <div className="order-video-thumb-button flex">
          <img src={PLAYICON} alt="play-icon" />
        </div>
      )}
    </div>
    <div className="custom-sticker-video-info">
      <h1>A perfect sticker for your design</h1>
      <span>
        All of our beautiful stickers are made with the upmost attention to
        detail. Order today and recieve a free proof before your order is
        produced. Need it fast? We offer express shipping options for all your
        needs!
      </span>
    </div>
  </div>
)

export default OrderVideo
