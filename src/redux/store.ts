import { createStore } from "redux";
import quizReducer from "./reducers/quizReducer";

const store = createStore(quizReducer);
export default store;