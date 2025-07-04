import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppStateStatus } from "react-native";
import { ReducerNames } from "../../config/enums";

interface UserState {
  token: String;
  isOnBoarding: Boolean;
  notificationCount: Number;
  accountModal: Boolean;
  userData: Object;
}

export const userReducerInitialState: UserState = {
  token: "",
  isOnBoarding: false,
  notificationCount: 0,
  accountModal: false,
  userData: {},
};

const userSlice = createSlice({
  name: ReducerNames.UserReducer,
  initialState: userReducerInitialState,
  reducers: {
    setToken(state, action: PayloadAction<String>) {
      state.token = action.payload;
    },
    setUserData(state, action: PayloadAction<any>) {
      state.token = action.payload;
    },

    setOnBoarding(state, action: PayloadAction<boolean>) {
      state.isOnBoarding = action.payload;
    },
    setAccountModal(state, action: PayloadAction<boolean>) {
      state.accountModal = action.payload;
    },

    setNotificationCount(state, action: PayloadAction<number>) {
      state.notificationCount = action.payload;
    },
  },
});

export const {
  setToken,
  setAccountModal,
  setNotificationCount,
  setOnBoarding,
  setUserData,
} = userSlice.actions;
export default userSlice.reducer;
