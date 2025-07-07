import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { Images } from "../assets/images";
import Icons from "./Icons";
import ImageFast from "./ImageFast";
import SearchBar from "./SearchBar";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ isBack }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {isBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="chevron-back" family="Ionicons" size={26} />
        </TouchableOpacity>
      ) : (
        <ImageFast source={Images.user} style={styles.logo} />
      )}
      <SearchBar
        placeHolder="Item, User, brand"
        containerStyle={{ width: isBack ? "70%" : "65%" }}
      />
      <View style={styles.iconsRow}>
        <TouchableOpacity>
          <Icons
            family={isBack ? "Fontisto" : "Feather"}
            name={isBack ? "share-a" : "bookmark"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons
            family="Feather"
            name={isBack ? "more-horizontal" : "mail"}
            size={24}
          />
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
    justifyContent: "space-between",
    paddingVertical: 6,
    // marginTop: StatusBar.currentHeight,
    marginTop: 40,
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
