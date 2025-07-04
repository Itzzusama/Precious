import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/state/store';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorBoundaryScreen from './src/screens/ErrorBoundaryScreen';
import App from './src/App';

class AppProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppProvider);
