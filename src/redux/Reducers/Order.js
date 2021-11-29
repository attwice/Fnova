import { createAction, handleActions } from "redux-actions"
import {
  requestSuccess,
  requestFail,
  requestPending,
} from "redux/ApiCaller/RequestStatus"

import { DO_GET_INDENT, DO_STRIPE_PAY, DO_CREATE_ORDER } from "constants/index"

const getInitialState = () => ({
  status: "init_state",
  payload: null,
  error: null,
})

export const getIndentAction = createAction(DO_GET_INDENT)
export const stripePayAction = createAction(DO_STRIPE_PAY)
export const createOrderAction = createAction(DO_CREATE_ORDER)

export default handleActions(
  {
    [requestPending(DO_GET_INDENT)]: (state) => ({
      ...state,
      status: requestPending(DO_GET_INDENT),
    }),
    [requestSuccess(DO_GET_INDENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_GET_INDENT),
      payload,
    }),
    [requestFail(DO_GET_INDENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_GET_INDENT),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_STRIPE_PAY)]: (state) => ({
      ...state,
      status: requestPending(DO_STRIPE_PAY),
    }),
    [requestSuccess(DO_STRIPE_PAY)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_STRIPE_PAY),
      payload,
    }),
    [requestFail(DO_STRIPE_PAY)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_STRIPE_PAY),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_CREATE_ORDER)]: (state) => ({
      ...state,
      status: requestPending(DO_CREATE_ORDER),
    }),
    [requestSuccess(DO_CREATE_ORDER)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_CREATE_ORDER),
      payload,
    }),
    [requestFail(DO_CREATE_ORDER)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_CREATE_ORDER),
      payload: null,
      error: payload,
    }),
  },
  getInitialState()
)
