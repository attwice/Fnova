import { PersistGate } from 'redux-persist/integration/react'
import 'styles/style.scss'
import HeaderBar from "components/HeaderBar"
import Header from "components/Header"
import Footer from "components/Footer"
import FooterBar from "components/FooterBar"
import { Provider } from "react-redux"
import { store, persistor } from "redux/ConfigureStore"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <script src="https://www.googletagmanager.com/gtag/js?id=AW-314966559"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9mxZ7IdcEup9vC5on0sXx-PpMnSo9Gwc&libraries=places"></script>
      <script type="text/javascript" src="./tawk.js"></script>
      <PersistGate loading={null} persistor={persistor}>
        <HeaderBar />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <FooterBar />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
