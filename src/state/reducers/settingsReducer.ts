import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';
import { ReducerNames } from '../../config/enums';

interface SettingsState {
  appState: AppStateStatus;
  activePolicy: 'Impressum' | 'Datenschutz';
  dataPolicyContent: String;
  impressumContent: String;
  isOnline: boolean;
  updateApp: boolean;
  updateAlertVisible: boolean;
  currentDay: number;
  showErrorScreen: boolean;
  isDataOutdated: boolean;
}

export const settingsReducerInitialState: SettingsState = {
  appState: 'background',
  activePolicy: 'Impressum',
  dataPolicyContent: 'Datenschutzerklärung',
  impressumContent: 'Impressum',
  isOnline: false,
  updateApp: false,
  updateAlertVisible: false,
  currentDay: 0,
  showErrorScreen: false,
  isDataOutdated: false,
};

const settingsSlice = createSlice({
  name: ReducerNames.SettingsReducer,
  initialState: settingsReducerInitialState,
  reducers: {
    setAppState(state, action: PayloadAction<AppStateStatus>) {
      state.appState = action.payload;
    },
    setCurrentDay(state, action: PayloadAction<number>) {
      state.currentDay = action.payload;
    },
    setIsDataOutdated(state, action: PayloadAction<boolean>) {
      state.isDataOutdated = action.payload;
    },
    setActivePolicy(state, action: PayloadAction<'Impressum' | 'Datenschutz'>) {
      state.activePolicy = action.payload;
    },
    setDataPolicyContent(state, action: PayloadAction<String>) {
      state.dataPolicyContent = action.payload;
    },
    setImpressumContent(state, action: PayloadAction<String>) {
      state.impressumContent = action.payload;
    },
    setIsOnline(state, action: PayloadAction<boolean>) {
      state.isOnline = action.payload;
    },
    setUpdateApp(state, action: PayloadAction<boolean>) {
      state.updateApp = action.payload;
    },
    setUpdateAlertVisible(state, action: PayloadAction<boolean>) {
      state.updateAlertVisible = action.payload;
    },
    setShowErrorScreen(state, action: PayloadAction<boolean>) {
      state.showErrorScreen = action.payload;
    },
  },
});

export const {
  setAppState,
  setCurrentDay,
  setActivePolicy,
  setDataPolicyContent,
  setImpressumContent,
  setIsOnline,
  setUpdateApp,
  setUpdateAlertVisible,
  setShowErrorScreen,
  setIsDataOutdated,
} = settingsSlice.actions;
export default settingsSlice.reducer;
