import React from "react"
import { render } from "react-dom"
import App from "../src/containers/App"
// import GA4React from "ga-4-react"
import reportWebVitals from "./reportWebVitals"
import "styles/style.scss"
import "react-calendar/dist/Calendar.css"

// const ga4react = new GA4React("G-B56XKZFSPT")

// ;(async () => {
//   await ga4react.initialize()
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
// })()

reportWebVitals()
