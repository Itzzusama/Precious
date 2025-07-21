import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import { Images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";

interface PostProps {
  onPress?: () => void;
}

const Post: React.FC<PostProps> = ({ onPress }) => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate("DetailPage" as never); // "as never" to satisfy typing
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <PostHeader user={{ name: "tom_", avatar: Images.logo }} />
      <PostBody
        images={[Images.post, Images.post, Images.post]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <PostFooter
        likes={2}
        comments={33}
        currentIndex={currentIndex}
        total={3}
      />
    </TouchableOpacity>
  );
};

export default Post;
