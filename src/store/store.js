import { createStore } from "redux";
import rootReducer from "./reducers";

/// -------------------------------
/// STORE - глобальный объект с которым
/// ведеться работа
/// -------------------------------
export default createStore(rootReducer);
