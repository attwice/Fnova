import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'

import { Reviews } from "constants/Reviews"

const generateRatings = (counts) => {
  let stars = []

  for (let i = 0; i < counts; i++) {
    stars.push(
      <div className="star">
        <FontAwesomeIcon icon={faStar} color={"#FFA500"} />
      </div>
    )
  }

  return stars
}

const generateReviews = (selected, setSelected) =>
  Reviews.map((data, index) => (
    <div
      key={index}
      name={index}
      className={`custom-sticker-word-box ${
        selected === index ? "review-selected" : ""
      } `}
      onClick={(e) => setSelected(index)}
    >
      <div className="info">
        <div className="square flex">
          <img className="more-products-img" src={data.image} alt="avatar" />
        </div>
        <div className="text">
          <b>{data.name}</b>
          <span>{data.role}</span>
        </div>
      </div>
      <div className="rating">{generateRatings(data.rating)}</div>
    </div>
  ))

const Review = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="custom-sticker-word-panel">
      {/*<h1>Customer Reviews!</h1>*/}
      <div className="custom-sticker-word-container">
        <div className="custom-sticker-word-container-left">
          {generateReviews(selected, setSelected)}
        </div>
        <div className="custom-sticker-word-container-right">
          {
            <>
              <p>{Reviews[selected].review.title}</p>
              <span>{Reviews[selected].review.content}</span>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Review
