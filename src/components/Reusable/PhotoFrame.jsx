import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const PhotoFrame = (width, height, borderRadius, borderWidth, borderColor) => {
  return (
    <TouchableOpacity>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          borderWidth: 3,
          borderColor: "#fff",
        }}
        source={require("../../assets/book.jpg")}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export default PhotoFrame;

const styles = StyleSheet.create({
  photoFrame: (width, height, borderRadius, borderWidth, borderColor) => ({
    width: width,
    height: height,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderColor: borderColor,
    backgroundColor: "#fff",
    marginBottom: 5,
  }),
});
