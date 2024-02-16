import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Post } from "../../components";

const FeedScreen = ({ navigation }) => {
  return (
    <View style={styles.feed}>
      <Post onPressCheckout={() => navigation.navigate("Checkout")} />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
});
