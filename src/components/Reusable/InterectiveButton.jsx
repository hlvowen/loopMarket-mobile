import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const InterectiveButton = ({
  iconName,
  iconSize,
  iconColor,
  labelValue,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.interactiveButton} onPress={onPress}>
      <FontAwesome
        name={`${iconName}`}
        size={iconSize}
        color={`${iconColor}`}
      />
      <Text style={styles.label}>123</Text>
    </TouchableOpacity>
  );
};

export default InterectiveButton;

const styles = StyleSheet.create({
  interactiveButton: { alignItems: "center", gap: 5 },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
