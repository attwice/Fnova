import { useEffect } from "react"
import ReactGa from "react-ga"
import { Route } from "react-router"
import { useGA4React } from "ga-4-react"

import { NODE_ENV } from "configuration"

const GoogleAnalytics = ({ location: { pathname, search }, options }) => {
  const ga = useGA4React()

  const logPageChange = (pathname, search = "") => {
    const page = pathname + search
    const { location } = window
    ReactGa.set({
      page,
      location: `${location.origin}${page}`,
      ...options,
    })
    ReactGa.pageview(page)
  }

  useEffect(() => {
    logPageChange(pathname, search)
  }, [pathname, search])

  return null
}

export const initGa = (options = {}) => {
  const isGAEnabled = NODE_ENV === "production"
  if (isGAEnabled) {
    ReactGa.initialize("G-B56XKZFSPT", [options])
  }

  return isGAEnabled
}

const RouterTracker = () => {
  return <Route component={GoogleAnalytics} />
}

export default RouterTracker
