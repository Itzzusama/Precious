import { ActivityIndicator, Dimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import React, { useEffect, useState } from "react";

import { ScreenWrapper } from "../../../components";
import Header from "../../../components/Header";
import { Colors } from "../../../config/colors";

// Sample terms data
const sampleTerms = [
  "You must be at least 18 years old to use this service.",
  "Your data will be stored securely.",
  "Do not share your password with anyone.",
  "We reserve the right to terminate accounts for violations.",
  "All transactions are subject to our privacy policy.",
];

const TermsCondition = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await get("users/terms");
  //     setText(res?.data?.terms?.description);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("========error========", error.response.data);
  //   }
  // };

  useEffect(() => {
    // Simulate fetching terms from sample array
    setLoading(true);
    const simulatedHTML = `<ul>${sampleTerms
      .map((term) => `<li>${term}</li>`)
      .join("")}</ul>`;
    setTimeout(() => {
      setText(simulatedHTML);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScreenWrapper
      scrollEnabled
      paddingHorizontal={15}
      headerUnScrollable={() => <Header name="Terms & Condition" profile />}
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
          tagsStyles={{ div: { color: Colors.BLACK } }}
        />
      )}
    </ScreenWrapper>
  );
};

export default TermsCondition;
