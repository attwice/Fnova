import { useState, useEffect } from "react"
import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/storage"
import initFirebase from 'configuration/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudUploadAlt, faSpinner } from "@fortawesome/free-solid-svg-icons"

const UPLOADIMG = "/resources/images/upload-image.webp"



const FileUploader = ({ url, onChange }) => {
  const [onUploading, setOnUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [imageAsUrl, setImageAsUrl] = useState("")
  const [storage, setStorage] = useState(null)

  useEffect(() => {
    initFirebase()
    setStorage(firebase.storage())
  })

  const handleFirebaseUpload = (e) => {
    const image = e.target.files[0]

    if (image === "") {
      console.error("Not an allowed type")
    }

    const uploadTask = storage.ref(`/stickers/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setOnUploading(true)
      },
      (error) => {
        setOnUploading(false)
      },
      () => {
        storage
          .ref("stickers")
          .child(image.name)
          .getDownloadURL()
          .then((firebaseUrl) => {
            onChange(firebaseUrl)
            setImageAsUrl(firebaseUrl)
          })
        setUploaded(true)
        setOnUploading(false)
      }
    )
  }

  return (
    <>
      <div className={`file-uploader ${uploaded && "file-uploader-noborder"}`}>
        {!onUploading && (
          <input
            type="file"
            accept=".webp,.jpg,.png,.jpeg,.pdf,.zip,.eps,.ai,.psd,.tiff"
            onChange={handleFirebaseUpload}
          />
        )}
        <div className="file-uploader-icon flex flex-column">
          {onUploading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} className="rotating" />
              <span>Uploading...</span>
            </>
          ) : uploaded || url ? (
            <>
              <img src={imageAsUrl || url} alt="thumbnail" />
              <div class="proof-warning">Do not worry! A proof will be sent before production. Your proof will include unlimited revisions until satisfied.</div>
            </>
          ) : (
            <>
              <img
                className={`${!uploaded && "image-not-uploaded"}`}
                src={UPLOADIMG}
              />
              <span>
                <b>Drop your image, or browse</b> <br /> Supports: All File
                Types
              </span>
            </>
          )}
        </div>
      </div>
      {/*<p className={`file-upload-warning ${!uploaded && "display-none"}`}>
        This is not a resepentation of your stickers. Your production proof will
        be emailed to you shortly after ordering.
      </p>
          */}
    </>
  )
}

export default FileUploader
