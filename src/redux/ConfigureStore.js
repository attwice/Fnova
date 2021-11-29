import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import appReducers from "redux/AppReducers"
import appSagas from "redux/Sagas"

const initialState = {}
const enhancers = [
  // typeof window !== 'undefined' &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__(),
]

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, appReducers)

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger]

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

export const store = createStore(persistedReducer, initialState, composedEnhancers)
export const persistor = persistStore(store)

sagaMiddleware.run(appSagas)