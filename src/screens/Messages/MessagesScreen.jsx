import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatItem from "../../components/Messages/ChatItem";
import NegotiationNotification from "../../components/Messages/NegotiationNotification";

const MessagesScreen = () => {
  return (
    <View>
      <NegotiationNotification />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
