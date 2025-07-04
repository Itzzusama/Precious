import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { Images } from "../assets/images";
import Icons from "./Icons";
import ImageFast from "./ImageFast";
import SearchBar from "./SearchBar";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageFast source={Images.user} style={styles.logo} />
      <SearchBar
        placeHolder="Item, User, brand"
        containerStyle={{ width: "65%" }}
      />
      <View style={styles.iconsRow}>
        <TouchableOpacity>
          <Icons family="Feather" name="bookmark" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons family="Feather" name="mail" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
    justifyContent: "space-between",
    paddingVertical: 10,
    marginTop: StatusBar.currentHeight,
  },
  iconsRow: {
    flexDirection: "row",
    columnGap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
