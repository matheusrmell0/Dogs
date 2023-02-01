import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Reducers Import
import photo from './reducers/photo';
import token from './reducers/token';
import user from './reducers/user';
import feed from './reducers/feed';
import ui from './reducers/ui';
import photoPost from './reducers/photoPost';

// Middlewares Import
import logger from './middlewares/logger';
//

// Middlewares
const middleware = [...getDefaultMiddleware(), logger];

// Reducers
const contador = () => 0;
const reducer = combineReducers({ contador, photo, token, user, feed, ui, photoPost });

// Store global
const store = configureStore({ reducer, middleware });
export default store;
