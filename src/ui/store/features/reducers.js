import { combineReducers } from "redux";
import { reducer as user } from "./user";

const rootReducer = combineReducers({
    user
});

export default rootReducer;