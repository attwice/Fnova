import { useState } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"

import Sliders from "constants/Sliders"
import Images from "constants/Stickers"
import Review from "components/Review"
import OrderCard from "components/Order/OrderCard"
import Stickers from "constants/Stickers"

import ROUTERS from "constants/Routers"
import { createOrder } from "helpers/StoreOrder"

const SliderRightDivs = styled.div`
  color: #6a7c93;
  background-color: #efedf5;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  overflow: hidden;

  &:before {
    content: "";
    display: flex;
    background-image: url("../../../${(props) => props.image}");
    background-size: cover;
    background-position: center center;
    padding-top: calc(100% / 16 * 9);
    width: 100%;
  }
`

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

const generateProducts = (handleNext) => {
  return Images.map((data, index) => {
    const title = data.title.toLowerCase()

    return (
      index < 4 && (
        <div
          key={index}
          className={`custom-sticker-product-box ${
            index == 1 || index == 3 ? "margin-right-mobile" : ""
          }`}
          //className="custom-sticker-product-box flex flex-column"
          onClick={() => handleNext(title)}
        >
          <div className="flex">
            <img
              className="more-products-image"
              src={data.image}
              alt="more products"
            />
          </div>
          <p>{data.title}</p>
        </div>
      )
    )
  })
}

const Advertise = () => {
  const router = useRouter()

  const handleNext = (title) => {
    if (title) {
      const orderId = createOrder(title)
      const route = title.toLowerCase().replaceAll(" ", "-")
      router.push(`${ROUTERS.CHOOSE_SIZE_QUANTITY}/${route}/${orderId}`)
    }
  }
  const [curSlider, setCurSlider] = useState(0)
  const [showCount, setShowCount] = useState(4)

  return (
    <>
      <div className="custom-sticker-image-panel">
        <h1>Some of our amazing stickers!</h1>
        <div className="custom-sticker-image-container flex">
          <div className="custom-sticker-image-container-box flex">
            <img
              className={curSlider == 0 ? "active" : "deactive"}
              src={Sliders[curSlider]}
            />
            <img
              className={curSlider == 1 ? "active" : "deactive"}
              src={Sliders[curSlider]}
            />
            <img
              className={curSlider == 2 ? "active" : "deactive"}
              src={Sliders[curSlider]}
            />
          </div>
          <div className="custom-sticker-image-right flex flex-column">
            <SliderRightDivs image={Sliders[1]}></SliderRightDivs>
            <SliderRightDivs image={Sliders[2]}></SliderRightDivs>
          </div>
        </div>
        <div className="custom-sticker-image-pagination">
          <div
            className={
              "custom-sticker-image-pagination-" +
              (curSlider == 0 ? "activeitem" : "item")
            }
            onClick={() => {
              setCurSlider(0)
            }}
          ></div>
          <div
            className={
              "custom-sticker-image-pagination-" +
              (curSlider == 1 ? "activeitem" : "item")
            }
            onClick={() => {
              setCurSlider(1)
            }}
          ></div>
          <div
            className={
              "custom-sticker-image-pagination-" +
              (curSlider == 2 ? "activeitem" : "item")
            }
            onClick={() => {
              setCurSlider(2)
            }}
          ></div>
        </div>
      </div>
      <div className="custom-sticker-product-panel">
        <h1>We have more products!</h1>
        <div className="container">
          {generateStickerOption(handleNext, showCount)}
        </div>
      </div>
      <Review />
    </>
  )
}

export default Advertise
