import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import Sidebar from "./Sidebar";
import PhotoFrame from "../Reusable/PhotoFrame";
import Content from "./Content";

const PostBody = () => {
  return (
    <View style={styles.postBody}>
      <Sidebar />
      <Content />
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  postBody: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
