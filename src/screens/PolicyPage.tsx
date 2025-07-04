import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";
import {
  Appearance,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { Statusbar } from "../components/presentation/Statusbar";
import { Colors } from "../config/colors";

const PolicyPage = () => {
  const darkModeEnabled = Appearance.getColorScheme() === "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            darkModeEnabled && Platform.OS === "android"
              ? Colors.BLACK
              : Colors.WHITE,
        },
      ]}
    >
      <Statusbar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        bounces={false}
      >
        {activePolicy === "Datenschutz" &&
          dataPolicyContent.map((item, index) => {
            const policyContent = item as unknown as Document;
            return (
              <RenderHtml
                key={index}
                contentWidth={Dimensions.get("screen").width}
                source={{ html: String(documentToHtmlString(policyContent)) }}
              />
            );
          })}
        {activePolicy === "Impressum" &&
          impressumContent.map((item, index) => {
            const policyContent = item as unknown as Document;
            return (
              <RenderHtml
                key={index}
                contentWidth={Dimensions.get("screen").width}
                source={{ html: String(documentToHtmlString(policyContent)) }}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    margin: 16,
  },
});

export default PolicyPage;
