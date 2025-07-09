import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import fonts from "../assets/fonts";
import { Images } from "../assets/images";
import { Colors } from "../config/colors";
import CustomText from "./CustomText";
import Icons from "./Icons";
import ImageFast from "./ImageFast";
import SearchBar from "./SearchBar";
import { RootStackParamList } from "../navigation/types";

interface HeaderProps {
  isBack?: Boolean;
  name?: string;
  profile?: Boolean;
  onMorePress?: () => void;
  backgroundColor?: string;
  icons?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  isBack = true,
  onMorePress,
  profile,
  name,
  backgroundColor,
  icons = true,
}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      style={[
        styles.mainContainer,
        {
          paddingTop: insets.top + 10,
          backgroundColor: backgroundColor || Colors.WHITE,
          justifyContent: icons ? "space-between" : "center",
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
        <View style={{ flex: 1 }}>
          <CustomText
            label={name}
            fontSize={18}
            alignSelf="center"
            fontFamily={fonts.semiBold}
          />
        </View>
      ) : (
        <SearchBar
          placeHolder="Item, User, brand"
          containerStyle={{ width: isBack ? "70%" : "65%" }}
        />
      )}
      {icons && (
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
      )}
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
