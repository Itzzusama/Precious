import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Images } from "../assets/images";
import Icons from "./Icons";
import ImageFast from "./ImageFast";
import SearchBar from "./SearchBar";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../config/colors";
import CustomText from "./CustomText";
import fonts from "../assets/fonts";

import { RootStackParamList } from "../navigation/types";

interface HeaderProps {
  isBack?: Boolean;
  name?: string;
  profile?: Boolean;
  onMorePress?: () => void;
  backgroundColor?:string
}

const Header: React.FC<HeaderProps> = ({
  isBack = true,
  onMorePress,
  profile,
  name,
  backgroundColor,
}) => {
  const navigation = useNavigation();

  interface HeaderProps {
    isBack?: boolean;

    onMorePress?: () => void;
  }

  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.mainContainer,
        {
          paddingTop: insets.top + 10,
          backgroundColor: backgroundColor || Colors.WHITE,
        },
      ]}
    >
      {isBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="chevron-back" family="Ionicons" size={26} />
        </TouchableOpacity>
      ) : (
        <ImageFast source={Images.user} style={styles.logo} />
      )}

      {profile ? (
        <CustomText label={name} fontSize={18} fontFamily={fonts.semiBold} />
      ) : (
        <SearchBar
          placeHolder="Item, User, brand"
          containerStyle={{ width: isBack ? "70%" : "65%" }}
        />
      )}
      <View style={styles.iconsRow}>
        <TouchableOpacity>
          <Icons
            family={isBack ? "Ionicons" : "Feather"}
            name={isBack ? "share-social" : "bookmark"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            isBack ? onMorePress?.() : navigation.navigate("ChatList")
          }
        >
          <Icons
            size={24}
            family="Feather"
            name={isBack ? "more-horizontal" : "mail"}
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
