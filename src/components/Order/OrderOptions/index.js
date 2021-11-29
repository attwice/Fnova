import { useState } from "react"
import OrderCard from "components/Order/OrderCard"


import Stickers from "constants/Stickers"

const generateStickerOption = (handleNext, counts) =>
  Stickers.map((sticker, index) => {
    if (index < counts) {
      return (
        <OrderCard
          key={index}
          image={sticker.image}
          title={sticker.title}
          comment={sticker.description}
          handleNext={handleNext}
        />
      )
    }
  })

const OrderOptions = ({ handleNext }) => {
  const [showCount, setShowCount] = useState(8)

  return (
    <>
      <div className="order-options flex">
        {generateStickerOption(handleNext, showCount)}
      </div>
      <div className="order-options-more flex">
        <button
          onClick={() => {
            showCount === 8 ? setShowCount(12) : setShowCount(8)
          }}
        >
          {showCount === 8 ? "Show more" : "Show less"}
        </button>
      </div>
    </>
  )
}

export default OrderOptions
