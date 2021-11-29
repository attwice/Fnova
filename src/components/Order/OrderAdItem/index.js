;

const OrderAdItem = ({ image, title, comment }) => (
  <div className="custom-sticker-shipping-box">
    <img src={image} alt="order ad" />
    <p>{title}</p>
    <span>{comment}</span>
  </div>
)

export default OrderAdItem
