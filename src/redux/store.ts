import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import quizReducer from "./reducers/quizReducer";

const persistConfig = {
    key: 'quiz',
    storage,
  }
 
const persistedReducer = persistReducer(persistConfig, quizReducer)

const store = createStore(persistedReducer,composeWithDevTools());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store);
export default store;

