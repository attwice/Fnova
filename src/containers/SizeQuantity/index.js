import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import SizeQuantityComponent from "components/SizeQuantity"
import { getPrice, getDiscount } from "helpers/Sticker"
import { getOrder, updateOrder } from "helpers/StoreOrder"
import ROUTERS from "constants/Routers"

import Images from "constants/Stickers"
import StickerImages from "constants/StickerImages"

const SizeQuantity = () => {
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState([2, 2])
  const [image, setImage] = useState("")
  const [customWidth, setCustomWidth] = useState(1)
  const [customHeight, setCustomHeight] = useState(1)
  const [customQuantity, setCustomQuantity] = useState(50)
  const [quantity, setQuantity] = useState(50)
  const [price, setPrice] = useState(0)
  const [orderId, setOrderId] = useState(0)

  const router = useRouter()
  // const pathname  = router.query

  useEffect(() => {
    let pathname = window.location.pathname.split('/')
    const curPath = pathname[pathname.length - 2]
    const orderId = pathname[pathname.length - 1]

    setOrderId(orderId)
    getImagesOfType(curPath)
    getDescription(curPath)

    const exist = getOrder(orderId)
    if (exist.toString().length) {
      if (exist.type) setType(exist.type)
      if (exist.size) setSize(exist.size)
      if (exist.quantity) setQuantity(exist.quantity * 1)
    }

    setType(curPath.replaceAll("-", " ").toUpperCase())
    setPrice(getPrice(size, quantity))
  }, [])

  const getImagesOfType = (curPath) => {
    const type = curPath.replaceAll("-", " ")

    StickerImages.map((data) => {
      if (data.title.toLowerCase() === type) {
        setImage(data.image)
      }
    })
  }

  const getDescription = (curPath) => {
    const type = curPath.replaceAll("-", " ")
    StickerImages.map((data) => {
      if (data.title.toLowerCase() === type) {
        setDescription(data.description)
      }
    })
  }

  const handleNext = () => {
    if (size[0] >= 0.5 && quantity >= 1) {
      updateOrder(orderId, { size, quantity, price })
      router.push(`${ROUTERS.UPLOAD_STICKER}/${orderId}`)
    } else {
      alert(
        `You must select a minimum size of 0.5" and a minimum quanitty of 10`
      )
    }
  }

  const handlePrevious = () => {
    router.back()
  }

  const handleChange = (name, e, value, quantities) => {
    switch (name ? name : e.target.name) {
      case "size":
        setSize(value)
        setPrice(getPrice([value[0], value[1]], quantity))
        break
      case "bothSize":
        setCustomWidth(e.target.value > 11 ? 10 : e.target.value)

        setCustomHeight(e.target.value > 11 ? 10 : e.target.value)

        setSize([
          e.target.value > 11 ? 10 : e.target.value,
          e.target.value > 11 ? 10 : e.target.value,
        ])
        setPrice(
          getPrice(
            [
              e.target.value > 11 ? 10 : e.target.value,
              e.target.value > 11 ? 10 : e.target.value,
            ],
            quantity
          )
        )

        break

      case "customWidth":
        setCustomWidth(e.target.value > 11 ? 10 : e.target.value)
        setSize([e.target.value > 11 ? 10 : e.target.value, customHeight])
        setPrice(
          getPrice(
            [e.target.value > 11 ? 10 : e.target.value, customHeight],
            quantity
          )
        )
        break
      case "customHeight":
        setCustomHeight(e.target.value > 11 ? 10 : e.target.value)
        setSize([customWidth, e.target.value > 11 ? 10 : e.target.value])
        setPrice(
          getPrice(
            [customWidth, e.target.value > 11 ? 10 : e.target.value],
            quantity
          )
        )
        break
      case "customQuantity":
        setCustomQuantity(e.target.value > 10001 ? 10000 : e.target.value)
        setQuantity(e.target.value > 10001 ? 10000 : e.target.value)
        setPrice(
          getPrice(size, e.target.value > 10001 ? 10000 : e.target.value)
        )
        break
      case "quantity":
        setQuantity(quantities)
        setCustomQuantity(quantities)
        setPrice(value)
        break
      default:
        break
    }
  }

  return (
    <SizeQuantityComponent
      type={type}
      description={description}
      size={size}
      image={image}
      quantity={quantity}
      customQuantity={customQuantity}
      getPrice={getPrice}
      getDiscount={getDiscount}
      handleChange={handleChange}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  )
}

export default SizeQuantity
