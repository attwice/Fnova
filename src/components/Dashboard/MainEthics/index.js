
import { useState } from "react"

const PORTRAIT1 = "/resources/images/sliders/slider-1.webp"
const PORTRAIT2 = "/resources/images/sliders/slider-2.webp"
const PORTRAIT3 = "/resources/images/sliders/slider-3.webp"

const portraits = [PORTRAIT1, PORTRAIT2, PORTRAIT3]

const MainEthics = () => {
  const [curPortrait, setCurPortrait] = useState(0)

  return (
    <div className="main-ethics flex flex-column">
      <div className="withStrike"></div>
      <p>
        Our
        <br />
        Past Work
        <span>We can produce your desired stickers today!</span>
      </p>
      <div className="main-ethics-portrait flex">
        <div className="main-ethics-portrait-pagination flex flex-column">
          <div
            className={curPortrait == 0 ? "active" : ""}
            onClick={() => setCurPortrait(0)}
          ></div>
          <div
            className={curPortrait == 1 ? "active" : ""}
            onClick={() => setCurPortrait(1)}
          ></div>
          <div
            className={curPortrait == 2 ? "active" : ""}
            onClick={() => setCurPortrait(2)}
          ></div>
        </div>
        <div className="main-ethics-portrait-image">
          <img
            className={curPortrait == 0 ? "active" : "deactive"}
            src={portraits[curPortrait]}
            max-width="760" max-height="530"
          />
          <img
            className={curPortrait == 1 ? "active" : "deactive"}
            src={portraits[curPortrait]}
            max-width="760" max-height="530"
          />
          <img
            className={curPortrait == 2 ? "active" : "deactive"}
            src={portraits[curPortrait]}
            max-width="760" max-height="530"
          />
        </div>
        <div className="main-ethics-portrait-pagination slider-mobile flex flex-column">
          <div
            className={curPortrait == 0 ? "active" : ""}
            onClick={() => setCurPortrait(0)}
          ></div>
          <div
            className={curPortrait == 1 ? "active" : ""}
            onClick={() => setCurPortrait(1)}
          ></div>
          <div
            className={curPortrait == 2 ? "active" : ""}
            onClick={() => setCurPortrait(2)}
          ></div>
        </div>

        <div className="main-ethics-portrait-info">
          <span className="main-ethics-portrait-info-title">
            Perfect Stickers!
          </span>
          <span className="main-ethics-portrait-info-text">
            Order your perfect stickers today with exact color matching, precision cutting, and free shipping! All of our stickers are proudly made in the USA.
          </span>
        </div>
      </div>
    </div>
  )
}

export default MainEthics
