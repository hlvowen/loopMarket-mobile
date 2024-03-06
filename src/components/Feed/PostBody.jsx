import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { LinearGradient } from "expo-linear-gradient";

const PostBody = ({ title, caption, price, photo, onPressPhoto }) => {
  return (
    <View style={styles.postBody}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={[StyleSheet.absoluteFillObject, styles.overlay]}
      />
      <Sidebar />
      <Content
        title={title}
        caption={caption}
        price={price}
        photo={photo}
        onPressPhoto={onPressPhoto}
      />
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  postBody: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: { top: "50%" },
});
