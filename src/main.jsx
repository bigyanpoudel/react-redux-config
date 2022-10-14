import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import reducers from "./reducers";
import middleware from "./middleware";
import {legacy_createStore as createStore} from "redux";

const store = createStore(reducers, middleware);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
