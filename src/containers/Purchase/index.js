import { useState } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import PurchaseComponent from "components/Purchase"
import { crateCommentAction } from "redux/Reducers/Comment"
import { commentStateSelector } from "redux/Selectors"

const Purchase = ({ commentStore, crateCommentAction }) => {
  return <PurchaseComponent />
}

const mapStateToProps = createStructuredSelector({
  commentStore: commentStateSelector,
})

const mapDispatchToProps = {
  crateCommentAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchase)
