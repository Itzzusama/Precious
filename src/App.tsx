import { NewAppScreen } from "@react-native/new-app-screen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import RootNavigation from "./navigation";
import CustomText from "./components/CustomText";

const App = () => {
  return (
    <View>
      <CustomText label={"gelloe"} />
    </View>
    // <RootSiblingParent>
    //   {/* <StatusBar barStyle="dark-light" backgroundColor={"black"} /> */}
    //   {/* <NavigationContainer>
    //     <RootNavigation />
    //   </NavigationContainer> */}
    // </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
