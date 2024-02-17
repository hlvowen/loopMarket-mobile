import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Photo from "./Photo";

const Content = ({ title, caption, price, photo }) => {
  return (
    <View style={styles.content}>
      <View style={styles.leftCol}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {price} €
        </Text>
        <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">
          {caption}
        </Text>
      </View>
      <View style={styles.rightCol}>
        <Photo photo={photo} />
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
