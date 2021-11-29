import { takeLatest } from "redux-saga/effects"

import apiCaller from "redux/ApiCaller"

import { DO_GET_INDENT, DO_STRIPE_PAY, DO_CREATE_ORDER } from "constants/index"

const doGetIndent = apiCaller({
  type: DO_GET_INDENT,
  method: "post",
  path: () => "/stripe",
})

const doStripePay = apiCaller({
  type: DO_STRIPE_PAY,
  method: "get",
  path: () => "/stripe",
})

const doCreateOrder = apiCaller({
  type: DO_CREATE_ORDER,
  method: "post",
  path: () => "/order",
})

export default function* rootSaga() {
  yield takeLatest(DO_GET_INDENT, doGetIndent)
  yield takeLatest(DO_STRIPE_PAY, doStripePay)
  yield takeLatest(DO_CREATE_ORDER, doCreateOrder)
}
