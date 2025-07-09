import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import { Images } from "../../assets/images";

const Post = ({ onPress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
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
