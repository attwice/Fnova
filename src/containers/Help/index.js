import { useState } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import HelpComponent from "components/Help"
import { crateCommentAction } from "redux/Reducers/Comment"
import { commentStateSelector } from "redux/Selectors"

const Help = ({ commentStore, crateCommentAction }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [comments, setComments] = useState("")
  const [posted, setAsPosted] = useState(false)
  const [succeed, setAsSucceed] = useState(false)

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "firstname":
        setFirstName(e.target.value)
        break
      case "lastname":
        setLastName(e.target.value)
        break
      case "email":
        setEmail(e.target.value)
        break
      case "comments":
        setComments(e.target.value)
        break
      default:
        break
    }
  }

  const onHandleSubmit = () => {
    crateCommentAction({
      body: {
        firstname: firstName,
        lastname: lastName,
        email,
        comment: comments,
      },
      onSuccess: ({ data }) => {
        setAsPosted(true)
        setAsSucceed(true)
      },
      onFailure: ({ data }) => {
        setAsPosted(true)
        setAsSucceed(false)
      },
    })
  }

  return (
    <HelpComponent
      posted={posted}
      succeed={succeed}
      onChangeHandler={onChangeHandler}
      onHandleSubmit={onHandleSubmit}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  commentStore: commentStateSelector,
})

const mapDispatchToProps = {
  crateCommentAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)
