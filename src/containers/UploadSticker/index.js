import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import UploadStickerComponent from "components/UploadSticker"
import FileUploader from "components/FileUploader"

import { getOrder, updateOrder } from "helpers/StoreOrder"
import ROUTERS from "constants/Routers"

const UploadSticker = () => {
  const router = useRouter()
  // const pathname = router.query

  const [orderId, setOrderId] = useState(0)
  const [imageUrl, setImageUrl] = useState("")
  const [instruction, setInstruction] = useState("")

  useEffect(() => {
    let pathname = window.location.pathname.split('/')
    const orderId = pathname[pathname.length - 1]

    const exist = getOrder(orderId)
    if (exist.url) setImageUrl(exist.url)
    if (exist.instruction) setInstruction(exist.instruction)

    setOrderId(orderId)
  }, [])

  const handleChange = (e) => {
    setInstruction(e.target.value)
  }

  const handleNext = (isSkip = false) => {
    const res = updateOrder(orderId, {
      url: imageUrl,
      skip: isSkip,
      instruction,
    })

    if (res) {
      router.push(ROUTERS.CART)
    } else {
      alert("There is no such order. Please restart")
    }
  }

  const handlePrevious = () => {
    router.back()
  }

  return (
    <UploadStickerComponent
      url={imageUrl}
      instruction={instruction || ""}
      onChange={handleChange}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    >
      <FileUploader url={imageUrl} onChange={setImageUrl} />
    </UploadStickerComponent>
  )
}

export default UploadSticker
