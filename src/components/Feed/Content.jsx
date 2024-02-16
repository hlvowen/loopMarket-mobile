import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Photo from "./Photo";

const Content = () => {
  return (
    <View style={styles.content}>
      <View style={styles.leftCol}>
        <Text style={styles.title} numberOfLines={3}>
          The Entwined Beginning
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          50 $
        </Text>
        <Text style={styles.caption} numberOfLines={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.rightCol}>
        <Photo />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  leftCol: {
    flex: 2,
    gap: 5,
    justifyContent: "flex-end",
  },
  rightCol: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  price: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  caption: { fontSize: 14, color: "#fff" },
});
