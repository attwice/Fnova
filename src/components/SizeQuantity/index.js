import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faChevronLeft,
  faBatteryEmpty,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import ReactToolTip from "react-tooltip"
import SizeQuantities from "constants/SizeQuantity"
import OrderStatusBar from "../OrderStatusBar"
import Advertise from "components/Advertise"

const VIDEOTHUMB = "/resources/images/video-thumb.webp"
import CustomButton from "./Button"
import OrderAd from "components/Order/OrderAd"
import Images from "constants/Stickers"

const { PopularSizes, PopularQuantities } = SizeQuantities

const generateProducts = (handleNext) => {
  return Images.map((data, index) => {
    const title = data.title.toLowerCase()

    return (
      index < 4 && (
        <div
          key={index}
          className="custom-sticker-product-box flex flex-column"
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

const SizeQuantity = ({
  type,
  description,
  size,
  image,
  quantity,
  customQuantity,
  getPrice,
  getDiscount,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  const getPriseOfSize = (size, quantity) => {
    const price = getPrice(size, quantity)

    return price
  }

  const onQuantityKeyUp = (e) => {
    const delayDebounceFn = setTimeout(() => {
      const val = parseInt(e.target.value)
      if (val > 10000) {
        e.target.value = 10000
      } else if (val < 10) {
        e.target.value = 10
      }
    }, 3000)
    return () => clearTimeout(delayDebounceFn)
  }

  const onSizeKeyUp = (e) => {
    if (e.target.value > 11) {
      e.target.value = 10
    } else if (e.target.value < 0.5) {
      //e.target.value = 0.5
    }
  }

  const generateSize = (pSizes, size) =>
    pSizes.map((pSize, index) => (
      <CustomButton
        key={index}
        onClick={(e) => handleChange("size", e, pSize)}
        size={pSize[0]}
        value={size[0]}
        defaultValue={size[0]}
      >{`${pSize[0].toString()}"`}</CustomButton>
    ))

  const generateQuantity = (pQuantities, quantity) =>
    pQuantities.map((pQuantity, index) => (
      <CustomButton
        key={index}
        onClick={(e) => {
          handleChange(
            "quantity",
            e,
            getPriseOfSize(size, pQuantity),
            pQuantity
          )
        }}
        size={pQuantity}
        defaultValue={quantity}
      >{`${pQuantity.toString() || pQuantity}`}</CustomButton>
    ))
  return (
    <>
      <div className="size-quantity">
        <OrderStatusBar
          title="Product Details"
          handlePrevious={handlePrevious}
        />
        <div className="size-quantity-customizer">
          <div className="size-quantity-customizer-box">
            <h1 className="size-quantity-title">{type}</h1>
            <p className="size-quantity-description">{description}</p>

            <div className="flex size-quantity-content">
              <ul className="size-quantity-radio size-selector">
                <li className="size-quantity-title-secondary">Size</li>
                <li>
                  <label htmlFor="variant_2">
                    <input
                      name="size"
                      id="variant_2"
                      type="radio"
                      checked={size[0] == 2}
                      value="2"
                      onChange={(e) => {
                        handleChange("bothSize", e, 0, 0)
                      }}
                    />
                    <span className="size-quantity-selector-margin">
                      2" x 2"
                    </span>
                    <span className="checkmark"><span/><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_3">
                    <input
                      name="size"
                      id="variant_3"
                      type="radio"
                      value="3"
                      onChange={(e) => {
                        handleChange("bothSize", e, 0, 0)
                      }}
                    />
                    <span className="size-quantity-selector-margin">
                      3" x 3"
                    </span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_4">
                    <input
                      name="size"
                      id="variant_4"
                      type="radio"
                      value="4"
                      onChange={(e) => {
                        handleChange("bothSize", e, 0, 0)
                      }}
                    />
                    <span className="size-quantity-selector-margin">
                      4" x 4"
                    </span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_5">
                    <input
                      name="size"
                      id="variant_5"
                      type="radio"
                      value="5"
                      onChange={(e) => {
                        handleChange("bothSize", e, 0, 0)
                      }}
                    />
                    <span className="size-quantity-selector-margin">
                      5" x 5"
                    </span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_6">
                    <input name="size" id="variant_6" type="radio" value="5" />
                    <span className="custom-title">
                      <span className="size-quantity-selector-margin">
                        Custom
                      </span>
                    </span>
                    <span className="checkmark"><span/></span>
                    <span className="custom-size">
                      <input
                        type="number"
                        onKeyUp={onSizeKeyUp}
                        onChange={(e) => {
                          handleChange("customWidth", e, 0, 0)
                        }}
                      />{" "}
                      X{" "}
                      <input
                        type="number"
                        onKeyUp={onSizeKeyUp}
                        onChange={(e) => {
                          handleChange("customHeight", e, 0, 0)
                        }}
                      />
                    </span>
                  </label>
                </li>
              </ul>
              <ul className="size-quantity-radio">
                <li className="size-quantity-title-secondary">Quantity</li>
                <li>
                  <label htmlFor="variant_50">
                    <input
                      name="customQuantity"
                      checked={quantity == 50}
                      id="variant_50"
                      type="radio"
                      value="50"
                      onChange={(e) => handleChange(false, e, 0, 0)}
                    />
                    <span>
                      <span className="size-quantity-selector-margin">50</span>
                    </span>
                    <span>
                      {customQuantity !== 0 && `$${getPriseOfSize(size, 50)}`}
                    </span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_100">
                    <input
                      name="customQuantity"
                      id="variant_100"
                      type="radio"
                      value="100"
                      onChange={(e) => handleChange(false, e, 0, 0)}
                    />
                    <span>
                      <span className="size-quantity-selector-margin">100</span>
                    </span>
                    <span>
                      {customQuantity !== 0 && `$${getPriseOfSize(size, 100)}`}
                    </span>{" "}
                    <span id="save">Save {getDiscount(size, 100)}%</span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_200">
                    <input
                      name="customQuantity"
                      id="variant_200"
                      type="radio"
                      value="200"
                      onChange={(e) => handleChange(false, e, 0, 0)}
                    />
                    <span>
                      <span className="size-quantity-selector-margin">200</span>
                    </span>
                    <span>
                      {customQuantity !== 0 && `$${getPriseOfSize(size, 200)}`}
                    </span>{" "}
                    <span id="save">Save {getDiscount(size, 200)}%</span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_300">
                    <input
                      name="customQuantity"
                      id="variant_300"
                      type="radio"
                      value="300"
                      onChange={(e) => handleChange(false, e, 0, 0)}
                    />
                    <span>
                      <span className="size-quantity-selector-margin">300</span>
                    </span>
                    <span>
                      {customQuantity !== 0 && `$${getPriseOfSize(size, 300)}`}
                    </span>{" "}
                    <span id="save">Save {getDiscount(size, 300)}%</span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_500">
                    <input
                      name="customQuantity"
                      id="variant_500"
                      type="radio"
                      value="500"
                      onChange={(e) => handleChange(false, e, 0, 0)}
                    />
                    <span>
                      <span className="size-quantity-selector-margin">500</span>
                    </span>
                    <span>
                      {customQuantity !== 0 && `$${getPriseOfSize(size, 500)}`}
                    </span>{" "}
                    <span id="save">Save {getDiscount(size, 500)}%</span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_1000">
                    <input
                      name="customQuantity"
                      id="variant_1000"
                      type="radio"
                      value="1000"
                      onChange={(e) => handleChange(false, e, 0, 0)}
                    />
                    <span>
                      <span className="size-quantity-selector-margin">
                        1000
                      </span>
                    </span>
                    <span>
                      {customQuantity !== 0 && `$${getPriseOfSize(size, 1000)}`}
                    </span>{" "}
                    <span id="save">Save {getDiscount(size, 1000)}%</span>
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="variant_custom">
                    <input
                      name="customQuantity"
                      id="variant_custom"
                      type="radio"
                      value="1000"
                    />
                    <span className="custom-title">
                      <span className="size-quantity-selector-margin">
                        Custom
                      </span>
                    </span>
                    <span className="custom-size">
                      <input
                        type="number"
                        name="customQuantity"
                        onChange={(e) => handleChange(false, e, 0, 0)}
                        onKeyUp={onQuantityKeyUp}
                      />
                    </span>
                    {/*<span>
                      {customQuantity !== 0 &&
                        `$${getPriseOfSize(size, customQuantity)}`}
                    </span>
                      */}
                    <span className="checkmark"><span/></span>
                  </label>
                </li>
              </ul>
            </div>
            <h3>
              Total{" "}
              {customQuantity !== 0 &&
                `$${getPriseOfSize(size, customQuantity)}`}
            </h3>
            <div className="flex">
              <div className="size-quantity-card-prev" onClick={handlePrevious}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="size-quantity-card-cart" onClick={handleNext}>
                ADD TO CART
              </div>
            </div>
          </div>
          <div className="size-quantity-customizer-sticker">
            <img src={image} />
          </div>
        </div>

        <OrderAd />
        {/*
        <div className="size-quantity-shipping-panel">
          <div className="size-quantity-shipping-box">
            <FontAwesomeIcon icon={faBatteryEmpty} />
            <p>Free Shipping in 48 Hours</p>
            <span>
              Receive your custom sticker fast with our 48 hour turnaround and
              free shipping.
            </span>
          </div>
          <div className="size-quantity-shipping-box middle">
            <FontAwesomeIcon icon={faBatteryEmpty} />
            <p>Get an Online Proof</p>
            <span>
              Get your poly mailers fast with 4 day turn around and free
              shipping.
            </span>
          </div>
          <div className="size-quantity-shipping-box">
            <FontAwesomeIcon icon={faBatteryEmpty} />
            <p>Unmatched Durabitliy</p>
            <span>
              Made spesfically wiht durability in ind. Water, scratch, and UV
              resistant.
            </span>
          </div>
        </div>
        */}
        <div className="size-quantity-video-panel">
          <div className="size-quantity-video-box flex">
            <img src={VIDEOTHUMB} alt="youtube" />
          </div>
          <div className="size-quantity-video-info">
            <h1>Free proofs, full color printing & fast turn around.</h1>
            <span>
              StickerCove's custom poly mailers offer the easiest way to get
              quality packaging fast. Customize and brand your shipping bags by
              ordering as few as 10 mailers. Upload your design, get a free
              online proof, and we'll produce your custom packaging bags in 4
              days or less
            </span>
          </div>
        </div>
        <Advertise handleNext={handleNext} />
      </div>
    </>
  )
}

export default SizeQuantity
