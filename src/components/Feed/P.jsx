import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import PostBody from "./PostBody";

const P = () => {
  return (
    <View style={styles.post}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={require("../../assets/book.jpg")}
      />
      <PostBody />
    </View>
  );
};

export default P;

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
  image: {
    height: SIZES.height,
    width: SIZES.width,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
