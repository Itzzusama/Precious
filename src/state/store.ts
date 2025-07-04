import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistCombineReducers } from "redux-persist";
import { reducers, settingsReducerInitialState } from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReducerNames } from "../config/enums";

const initialState = {
  settingsReducer: settingsReducerInitialState,
};

const persistConfig = {
  key: "root",
  version: 1,
  blacklist: [ReducerNames.SettingsReducer],
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  settingsReducer: reducers.settingsReducer,
  userReducer: reducers.userReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  // preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
