import { useState, useEffect } from "react"

const CustomButton = ({ defaultValue, size, children, ...otherProps }) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (defaultValue === size) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [defaultValue])

  return (
    <button
      className={`size-quantity-btn${
        selected ? " size-quantity-btn-selected" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
