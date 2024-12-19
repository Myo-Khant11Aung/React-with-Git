import { createStore } from "redux";
import taskReducer from "./taskReducers";

const store = createStore(taskReducer);

export default store;
