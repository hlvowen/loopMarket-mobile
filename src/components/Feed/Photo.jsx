import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const Photo = ({ photo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: photo }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export default Photo;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#fff",
  },
});
