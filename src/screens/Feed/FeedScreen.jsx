import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Post } from "../../components";
import P from "../../components/Feed/P";

const FeedScreen = ({ navigation }) => {
  return (
    <View style={styles.feed}>
      <P />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
});
