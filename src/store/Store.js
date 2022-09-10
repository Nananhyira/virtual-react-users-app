import { legacy_createStore as createStore } from "redux";
import usersReducer from "../reducer/usersReducers";

let store = createStore(usersReducer);

export default store;
