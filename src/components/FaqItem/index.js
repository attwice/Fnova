import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"


const FaqItem = ({ question, answer }) => {
  const [collapsed, setCollapsed] = useState(true)

  const onHandleClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="faq-item flex flex-column" onClick={onHandleClick}>
      <div className="faq-item-question flex">
        <div>
          <span><FontAwesomeIcon icon={collapsed ? faPlus : faMinus} /></span> {question}
        </div>
        {/*<FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />*/}
      </div>
      {!collapsed && (
        <div className="faq-item-answer">
          {/*<span>Answer:</span>*/} {answer}
        </div>
      )}
    </div>
  )
}

export default FaqItem
