import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import OrderStatusBar from "../OrderStatusBar"


const UploadSticker = ({
  children,
  url,
  instruction,
  onChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
      <div className="upload-sticker">
        <OrderStatusBar
          title="Upload Sticker"
          handlePrevious={handlePrevious}
        />

        <div className="flex upload-sticker-mobile">
          <div className="upload-sticker-left">{children}</div>

          <div className="upload-sticker-right">
            <textarea
              name="sticker instruction"
              id="sticker-instruction"
              rows={4}
              placeholder="Let us know if you have any instructions to prepare your sticker!"
              onChange={onChange}
              defaultValue={instruction}
            ></textarea>
            {/*
            <label>
              The displayed image is not your production proof. One will be
              emailed after ordering.
            </label>
            */}
            <div className="upload-sticker-upload-choice">
              <div
                className="upload-sticker-upload-next"
                onClick={url ? () => handleNext(false) : () => {}}
              >
                <div>
                  CONTINUE
                  {/*<FontAwesomeIcon icon={faChevronCircleRight} />*/}
                </div>
              </div>

              <div
                className="upload-sticker-upload-skip"
                onClick={() => handleNext(true)}
              >
                <div>SKIP THIS STEP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadSticker
