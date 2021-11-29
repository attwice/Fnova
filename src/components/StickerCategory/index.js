const StickerCategory = ({ image, title, comment, popular, onClick }) => (
  <div className="sticker-category-item" onClick={onClick} image={image}>
    <div className="sticker-category-image-wrapper">
      <img className="sticker-category-image-type" src={image} alt="option" />
      {/* <img
        className="sticker-category-image-bg"
        src={BACKGROUND}
        alt="option"
      /> */}
    </div>
    <div className="sticker-category-title-wrapper">
      <span>{title}</span>
      <span className="sticker-category-title-popular">
        {title == "Die Cut Stickers" ? "Most Popular" : ""}
      </span>
    </div>
  </div>
)

export default StickerCategory

{/*
const StickerCategory = ({ image, title, comment, popular, onClick }) => (
  <div className="sticker-category flex flex-column" onClick={onClick}>
    <div className="sticker-category-image flex">
      <img className="sticker-category-image-type" src={image} alt="option" />
      {/* <img
        className="sticker-category-image-bg"
        src={BACKGROUND}
        alt="option"
      /> */}

      {/*
    </div>
    <div className="sticker-category-title flex">
      <span>{title}</span>
      <br />
      <span className="sticker-category-title-popular">{title == "Die Cut Stickers" ? "Most Popular" : ""}</span>
    </div>
  </div>
)
    

export default StickerCategory
*/}


