import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


const Testimoral = ({ comment, avatar, name, role }) => (
  <div className="testimoral-item flex flex-column">
    <div className="flex flex-column">
      <div className="testimoral-item-rating flex">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        {"(5.0 Rating)"}
      </div>
      <div className="testimoral-item-comment">{comment}</div>
    </div>
    <div className="testimoral-item-customer flex">
      <img src={avatar} alt="customer avatar" />
      <div className="testimoral-item-customer-info flex flex-column">
        <div>{name}</div>
        <div>{role}</div>
      </div>
    </div>
  </div>
)

export default Testimoral
