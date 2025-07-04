import { NewAppScreen } from '@react-native/new-app-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Login from './screens/Auth/Login';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <NewAppScreen templateFileName="App.tsx" />
    // </View>
    <RootSiblingParent>
      <StatusBar barStyle="dark-light" backgroundColor={"black"} />
                  
                    

    </RootSiblingParent>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
