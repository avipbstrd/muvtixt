import { combineReducers } from "redux";
import * as home from './home'

const reducers = combineReducers({
    home: home.reducer
});

export default reducers