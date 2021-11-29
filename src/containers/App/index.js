import { Provider } from "react-redux"
import store from "redux/ConfigureStore"


const App = (children) => {
  return (
      <Provider store={store}>
        {children}
      </Provider>
  )
}

export default App
