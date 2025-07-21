import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import RenderHTML from "react-native-render-html";

import { ScreenWrapper } from "../../../components";
import Header from "../../../components/Header";
import { Colors } from "../../../config/colors";

const samplePrivacyPolicy = [
  "We value your privacy and are committed to protecting your personal data.",
  "Information collected is used to provide and improve our services.",
  "We do not sell your personal information to third parties.",
  "You may request deletion of your account at any time.",
  "We use cookies to enhance user experience and analyze traffic.",
];

const PrivacyPolicy = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    const simulatedHTML = `<ul>${samplePrivacyPolicy
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`;
    setTimeout(() => {
      setText(simulatedHTML);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScreenWrapper
      scrollEnabled
      backgroundColor={Colors.mainBg}
      paddingHorizontal={15}
      headerUnScrollable={() => <Header name='Privacy Policy' profile />}
    >
      {loading ? (
        <ActivityIndicator
          color={Colors.primaryColor}
          style={{ marginTop: 30 }}
          size={50}
        />
      ) : (
        <RenderHTML
          contentWidth={Dimensions.get("window").width}
          source={{ html: `<div>${text || ""}</div>` }}
          tagsStyles={{ div: { color: Colors.black } }}
        />
      )}
    </ScreenWrapper>
  );
};

export default PrivacyPolicy;
