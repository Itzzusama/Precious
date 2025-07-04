import settingsReducer, {
  settingsReducerInitialState,
} from "./settingsReducer";
import userReducer, { userReducerInitialState } from "./userReducer";

const reducers = {
  settingsReducer,
  userReducer,
};

export {
  settingsReducerInitialState,
  reducers,
  userReducer,
  userReducerInitialState,
};
