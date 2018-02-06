import registerServiceWorker from "./registerServiceWorker"
import ReactDOM from "react-dom"
import React from "react"
import App from "./App"

import { PersistGate } from "redux-persist/es/integration/react"
import { persistReducer, persistStore } from "redux-persist"
import rootReducer from "./store/reducer"
import { Provider } from "react-redux"
import localForage from "localforage"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const reducer = persistReducer(
  {
    key: "root",
    storage: localForage
  },
  rootReducer
)

const store = createStore(reducer, applyMiddleware(thunk))
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
