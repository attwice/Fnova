import OrderAdItem from "components/Order/OrderAdItem"

const BOX = "/resources/images/vector/box.webp"
const CIRCUIT = "/resources/images/vector/circuit.webp"
const CLOUD = "/resources/images/vector/cloud.webp"

const OrderAd = () => (
  <div className="custom-sticker-shipping-panel">
    <OrderAdItem
      image={BOX}
      title={"Free shipping in 5 days"}
      comment={
        "All order including free express shipping to ensure your order arrives within 5 days."
      }
    />
    <OrderAdItem
      image={CIRCUIT}
      title={"Get an online proof"}
      comment={
        "Once your order is submited we will email out a proof before we begin production."
      }
    />
    <OrderAdItem
      image={CLOUD}
      title={"Durable and weatherproof"}
      comment={
        "Enjoy your stickers worry free with our 4+ year UV rating and water resistantice."
      }
    />
  </div>
)

export default OrderAd
