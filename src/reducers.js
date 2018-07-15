import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import movies from './modules/Movies/MovieReducer';

export default combineReducers({
    app,
    movies
})

