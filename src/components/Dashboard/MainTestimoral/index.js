import Testimoral from "components/Testimoral"

import { REVIEW_1, REVIEW_2 } from "constants/DummyTexts"

const AVATAR = "/resources/images/avatar/avatar.jpg"
const JOSEPH = "/resources/images/avatar/joseph.webp"

const MainTestimoral = () => (
  <div className="main-testimoral">

    <p>WHAT OUR CUSTOMERS ARE SAYING</p>
    <div className="main-testimoral-slide flex">
      <Testimoral
        comment={REVIEW_1}
        avatar={JOSEPH}
        name={"JOSEPH DINGMAN"}
        role={"General Customer"}
      />
      <Testimoral
        comment={REVIEW_2}
        avatar={AVATAR}
        name={"ERIC RUBIO"}
        role={"General Customer"}
      />
    </div>
  </div>
)

export default MainTestimoral
