import MainBanner from "./MainBanner"
import MainOptions from "./MainOptions"
import MainProcess from "./MainProcess"
import MainTestimoral from "./MainTestimoral"
import MainEthics from "./MainEthics"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Review from "components/Review"

const Dashboard = ({ handleOrder, handleNext }) => (
  <>
    <MainBanner />
    <MainOptions handleOrder={handleOrder} handleNext={handleNext}/>
    <MainProcess />

    {/* <MainTestimoral /> */}
    <MainEthics />
    <div className="main-word flex flex-column">
      <div className="withStrike"></div>
      <p>
        Our
        <br />
        Previous Customers
        <span>
          Listen to what our previous customers have to say about their stickers!
        </span>
      </p>
      <Review />
      
    </div>
  </>
)

export default Dashboard
