import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import PostBody from "./PostBody";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const P = ({ title, caption, price, photo }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.post(tabBarHeight)}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={{ uri: photo }}
      />
      <PostBody title={title} caption={caption} price={price} photo={photo} />
    </View>
  );
};

export default P;

const styles = StyleSheet.create({
  post: (tabBarHeight) => ({
    height: SIZES.height - tabBarHeight,
  }),
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
