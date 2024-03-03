import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ReusableButton = ({
  label,
  width,
  height,
  bgColor,
  borderWidth,
  borderColor,
  borderRadius,
  labelColor,
  fontSize,
  onPress,
  disabled,
  opacity,
}) => {
  return (
    <TouchableOpacity
      style={styles.button(
        width,
        height,
        bgColor,
        borderWidth,
        borderColor,
        borderRadius,
        opacity
      )}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label(labelColor, fontSize)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({
  button: (
    width,
    height,
    bgColor,
    borderWidth,
    borderColor,
    borderRadius,
    opacity
  ) => ({
    width: width,
    height: height,
    backgroundColor: bgColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius,
    opacity: opacity,
  }),
  label: (color, fontSize) => ({
    color: color,
    fontSize: fontSize,
  }),
});
