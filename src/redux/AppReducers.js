import { combineReducers } from "redux"

import order from "redux/Reducers/Order"
import comment from "redux/Reducers/Comment"
import checkout from "redux/Reducers/Checkout"
import abandon from "redux/Reducers/Abandon"

const appReducers = combineReducers({
  order,
  comment,
  checkout,
  abandon
})

export default appReducers
