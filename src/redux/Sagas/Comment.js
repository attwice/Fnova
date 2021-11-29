import { takeLatest } from "@redux-saga/core/effects"
import apiCaller from "redux/ApiCaller"
import { DO_CREATE_COMMENT } from "constants/index"

const doCreateComment = apiCaller({
  type: DO_CREATE_COMMENT,
  method: "post",
  path: () => "/comment",
})

export default function* rootSaga() {
  yield takeLatest(DO_CREATE_COMMENT, doCreateComment)
}
