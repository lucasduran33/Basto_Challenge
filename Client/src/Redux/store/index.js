import {applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
import rootReducer  from "../reducer/index";
import thunk from "redux-thunk"

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;