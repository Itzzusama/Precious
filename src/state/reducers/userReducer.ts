import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerNames } from "../../config/enums";

// Define a proper interface for userData
interface UserData {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  token: string;
  isOnBoarding: boolean;
  notificationCount: number;
  accountModal: boolean;
  userData: UserData | null;
}

export const userReducerInitialState: UserState = {
  token: "",
  isOnBoarding: false,
  notificationCount: 0,
  accountModal: false,
  userData: null,
};

const userSlice = createSlice({
  name: ReducerNames.UserReducer,
  initialState: userReducerInitialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserData(state, action: PayloadAction<UserData | null>) {  // <-- updated here
      state.userData = action.payload;
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
