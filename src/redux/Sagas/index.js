import { all } from "redux-saga/effects"

import order from "./Order"
import comment from "./Comment"

const appSaga = function* () {
  yield all([order(), comment()])
}

export default appSaga
