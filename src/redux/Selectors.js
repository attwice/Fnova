import { get } from "lodash"

export const orderStateSelector = (state) => get(state, "order")
export const commentStateSelector = (state) => get(state, "comment")
