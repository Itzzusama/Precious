import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import CustomText from "../CustomText";
import Icons from "../Icons";
import ImageFast from "../ImageFast";

type HeaderProps = {
  title: string;
  source: string | number;
};

const ChatHeader: React.FC<HeaderProps> = ({ title, source }) => {
  const navigation = useNavigation();

  const [isViewModal, setIsViewModal] = useState(false);

  return (
    <View style={[styles.mainContainer]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}
        style={styles.icon}
      >
        <Icons size={24} family={"Feather"} name={"arrow-left"} />
      </TouchableOpacity>

      <ImageFast resizeMode="cover" source={source} style={styles.userImage} />
      <View style={{ flex: 1 }}>
        <CustomText label={title} fontFamily={fonts.bold} />
        <CustomText label={"Active Now"} fontSize={13} />
      </View>

      <Pressable
        style={styles.icon}
        onPress={() => setIsViewModal(true)}
        hitSlop={{ top: 30, left: 30, bottom: 30, right: 30 }}
      >
        <Icons family={"Entypo"} name={"dots-three-vertical"} size={20} />
      </Pressable>

      <CustomModal
        isVisible={isViewModal}
        isChange
        onDisable={() => setIsViewModal(false)}
      >
        <View style={[styles.modalContainer]}>
          <View
            style={[{ width: "100%", alignItems: "center", marginTop: 20 }]}
          >
            <CustomButton
              title="Block"
              marginBottom={10}
              indicatorcolor={"#fff"}
              customText={styles.txt}
              customStyle={styles.btn}
            />
            <CustomButton
              title="Report"
              marginBottom={10}
              customText={styles.txt}
              customStyle={styles.btn}
            />
            <CustomButton
              title="Cancel"
              marginBottom={10}
              customText={{ fontFamily: fonts.medium }}
              onPress={() => setIsViewModal(false)}
              color={"#FFF"}
              backgroundColor="#000"
              height={50}
            />
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GREY,
  },
  icon: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  modalContainer: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 6,
    backgroundColor: Colors.WHITE,
  },
  btn: {
    height: 47,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
  },
  txt: {
    fontFamily: fonts.medium,
    color: Colors.RED,
  },
});
