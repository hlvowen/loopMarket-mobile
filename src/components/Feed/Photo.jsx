import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const Photo = () => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={require("../../assets/book.jpg")}
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
