import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// Reducers Import
import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";
// Middlewares Import
import logger from "./middlewares/logger";
//

// Middlewares
const middleware = [...getDefaultMiddleware(), logger]

// Reducers
const contador = () => 0
const reducer = combineReducers({contador, photo, token, user})

// Store global
const store = configureStore({reducer, middleware})
export default store