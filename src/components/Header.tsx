import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Images } from "../assets/images";
import Icons from "./Icons";
import ImageFast from "./ImageFast";
import SearchBar from "./SearchBar";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../config/colors";

interface HeaderProps {
  isBack?: Boolean;
  onMorePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isBack = true,onMorePress }) => {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
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
            family={isBack ? "Ionicons" : "Feather"}
            name={isBack ? "share-social" : "bookmark"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onMorePress}>
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
    paddingBottom: 10,
    backgroundColor: Colors.WHITE,
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
