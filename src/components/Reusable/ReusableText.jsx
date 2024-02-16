import { Text, StyleSheet } from "react-native";
import React from "react";

const ReusableText = ({ content, fontSize, color }) => {
  return <Text style={styles.text(fontSize, color)}>{content}</Text>;
};

export default ReusableText;

const styles = StyleSheet.create({
  text: (fontSize, color) => ({
    fontSize: fontSize,
    color: color,
  }),
});
