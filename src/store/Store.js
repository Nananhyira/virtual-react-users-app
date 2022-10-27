import { legacy_createStore as createStore, combineReducers } from "redux";
import usersReducer from "../reducer/usersReducers";
import authReducer from "../reducer/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

let reducers = combineReducers({
	usersReducer: usersReducer,
	authReducer: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
let Store = createStore(persistedReducer);
let persistor = persistStore(Store);

export { Store, persistor };
