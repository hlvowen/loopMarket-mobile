import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

import { Avatar } from "@rneui/themed";
import { SIZES } from "../../constants/theme";

const ChatItem = () => {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.leftCol}>
        <Image
          style={styles.photo}
          source={require("../../assets/book.jpg")}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.rightCol}>
        <Text style={styles.username}>user1</Text>
        <Text numberOfLines={1} style={styles.message}>
          Message
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: "row",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: "#FFEAD2",
    width: SIZES.width,
    height: 90,
    flexDirection: "row",
    padding: 8,
    alignItems: "flex-start",
  },
  leftCol: { marginEnd: 5 },
  rightCol: { gap: 1, width: 200 },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  username: { fontWeight: "600", fontSize: 15 },
  message: { fontSize: 15 },
});
